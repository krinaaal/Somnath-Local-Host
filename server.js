import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { DatabaseSync } from 'node:sqlite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Database initialization
const DB_PATH = path.join(__dirname, 'leads.db');
const db = new DatabaseSync(DB_PATH);

// Setup database tables & indexes
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    destination TEXT,
    travel_date TEXT,
    travelers_count TEXT,
    cab_type TEXT,
    notes TEXT,
    source TEXT DEFAULT 'website_mobile',
    status TEXT DEFAULT 'new',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
  CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at);
`);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public & dist
app.use(express.static(path.join(__dirname, 'public')));
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Phone validator: Indian 10-digit phone
function isValidIndianPhone(phone) {
  if (!phone) return false;
  // Clean string
  const cleaned = phone.replace(/[^0-9]/g, '');
  // Matches 10 digits starting with 6, 7, 8, or 9; or 12 digits starting with 91; or 11 starting with 0
  if (cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)) {
    return cleaned;
  }
  if (cleaned.length === 12 && cleaned.startsWith('91') && /^[6-9]\d{9}$/.test(cleaned.slice(2))) {
    return cleaned.slice(2);
  }
  if (cleaned.length === 11 && cleaned.startsWith('0') && /^[6-9]\d{9}$/.test(cleaned.slice(1))) {
    return cleaned.slice(1);
  }
  return false;
}

// POST /api/leads - Save lead with zero friction & immediate persistence
app.post('/api/leads', (req, res) => {
  try {
    const {
      full_name,
      phone,
      destination,
      travel_date,
      travelers_count,
      cab_type,
      notes,
      source
    } = req.body;

    if (!full_name || full_name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please enter your full name (minimum 2 characters).'
      });
    }

    const validatedPhone = isValidIndianPhone(phone);
    if (!validatedPhone) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid 10-digit Indian mobile number.'
      });
    }

    const insertStmt = db.prepare(`
      INSERT INTO leads (
        full_name,
        phone,
        destination,
        travel_date,
        travelers_count,
        cab_type,
        notes,
        source
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insertStmt.run(
      full_name.trim(),
      validatedPhone,
      destination || 'Somnath Circuit',
      travel_date || '',
      travelers_count || '1-4',
      cab_type || 'Sedan / SUV',
      notes || '',
      source || 'mobile_instant_form'
    );

    const leadId = result.lastInsertRowid;
    console.log(`[LEAD RECEIVED] ID: ${leadId} | Name: ${full_name.trim()} | Phone: ${validatedPhone} | Destination: ${destination || 'Somnath'}`);

    return res.status(201).json({
      success: true,
      leadId: Number(leadId),
      message: 'Plan saved successfully! Our Somnath Host will contact you shortly.',
      lead: {
        id: Number(leadId),
        full_name: full_name.trim(),
        phone: validatedPhone,
        destination: destination || 'Somnath Circuit'
      }
    });
  } catch (err) {
    console.error('Error saving lead:', err);
    return res.status(500).json({
      success: false,
      error: 'Unable to save lead. Please try again or call directly at 6359798896.'
    });
  }
});

// GET /api/leads - Query saved leads (Admin inspection)
app.get('/api/leads', (req, res) => {
  try {
    const leadsStmt = db.prepare(`
      SELECT * FROM leads ORDER BY created_at DESC LIMIT 100
    `);
    const leads = leadsStmt.all();
    return res.json({
      success: true,
      count: leads.length,
      leads
    });
  } catch (err) {
    console.error('Error fetching leads:', err);
    return res.status(500).json({ success: false, error: 'Database query failed' });
  }
});

// GET /api/leads/export - CSV download
app.get('/api/leads/export', (req, res) => {
  try {
    const leadsStmt = db.prepare(`SELECT * FROM leads ORDER BY created_at DESC`);
    const leads = leadsStmt.all();
    let csv = 'ID,Full Name,Phone,Destination,Travel Date,Travelers,Cab Type,Notes,Source,Status,Created At\n';
    for (const lead of leads) {
      csv += `"${lead.id}","${(lead.full_name||'').replace(/"/g, '""')}","${lead.phone}","${(lead.destination||'').replace(/"/g, '""')}","${lead.travel_date||''}","${lead.travelers_count||''}","${lead.cab_type||''}","${(lead.notes||'').replace(/"/g, '""')}","${lead.source||''}","${lead.status||''}","${lead.created_at}"\n`;
    }
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="somnath_leads.csv"');
    return res.send(csv);
  } catch (err) {
    return res.status(500).send('Error generating export');
  }
});

// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Somnath Local Host API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// In production, fallback to index.html for SPA client routing
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    }
    next();
  });
}

// Start server if run directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Somnath Local Host server running at http://localhost:${PORT}`);
  });
}

export default app;
