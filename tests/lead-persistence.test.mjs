import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testLeadPersistence() {
  console.log('Testing Lead Database Persistence...');
  const dbPath = path.join(__dirname, '..', 'leads.db');
  const db = new DatabaseSync(dbPath);

  // 1. Verify table exists
  const tableCheck = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='leads'").all();
  if (tableCheck.length === 0) {
    throw new Error('Table leads does not exist!');
  }
  console.log('✓ Table leads exists in SQLite database');

  // 2. Insert test lead
  const testPhone = '9876543210';
  const testName = 'Test Pilgrim Traveler';
  const insertStmt = db.prepare(`
    INSERT INTO leads (full_name, phone, destination, travel_date, travelers_count, cab_type, source)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const result = insertStmt.run(testName, testPhone, 'Somnath + Sasan Gir', 'Next Week', '4 Members', 'Innova Crysta', 'automated_test');
  const newId = result.lastInsertRowid;
  console.log(`✓ Inserted test lead with ID: ${newId}`);

  // 3. Query back
  const queryStmt = db.prepare('SELECT * FROM leads WHERE id = ?');
  const record = queryStmt.get(newId);
  if (!record || record.phone !== testPhone || record.full_name !== testName) {
    throw new Error(`Lead retrieval failed for id ${newId}`);
  }
  console.log('✓ Retrieved lead successfully:', record);

  // 4. Verify indexes
  const indexes = db.prepare("SELECT name FROM sqlite_master WHERE type='index' AND tbl_name='leads'").all();
  console.log('✓ Leads indexes:', indexes.map(i => i.name));

  console.log('All Database Persistence tests passed successfully! 🎉');
}

testLeadPersistence().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
