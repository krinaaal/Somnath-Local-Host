import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Download, Database, Phone, User, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';

export default function AdminLeadsDrawer({ isOpen, onClose }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(data.leads || []);
      } else {
        setError(data.error || 'Failed to load leads');
      }
    } catch (err) {
      setError('Unable to reach backend database API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-2xl max-h-[90vh] flex flex-col shadow-2xl z-10 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white flex items-center gap-2">
                <span>Somnath Leads Database</span>
                <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">
                  {leads.length} Records
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Persistent SQLite records saved directly in <code className="text-amber-400">leads.db</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={fetchLeads}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors tap-bounce"
              title="Refresh database"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <a
              href="/api/leads/export"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors tap-bounce"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Table / Card view */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {error && (
            <div className="p-3 mb-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
              {error}
            </div>
          )}

          {loading ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-amber-400 mb-2" />
              Querying persistent SQLite records...
            </div>
          ) : leads.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No leads submitted yet. Test the lead form on mobile or desktop to see records persist here in real-time!
            </div>
          ) : (
            <div className="space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-slate-950/70 border border-slate-800 hover:border-slate-700 rounded-xl p-3.5 sm:p-4 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                        #SLH-{lead.id}
                      </span>
                      <span className="font-bold text-white text-sm">
                        {lead.full_name}
                      </span>
                      <a
                        href={`tel:${lead.phone}`}
                        className="inline-flex items-center gap-1 text-xs text-amber-300 hover:underline font-mono bg-slate-900 px-2 py-0.5 rounded"
                      >
                        <Phone className="w-3 h-3" />
                        <span>+91 {lead.phone}</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{new Date(lead.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
                    <div>
                      <span className="text-slate-500 text-[10px] block uppercase">Destination</span>
                      <span className="font-medium text-amber-300">{lead.destination || 'Somnath'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block uppercase">Travel Date</span>
                      <span>{lead.travel_date || 'Flexible'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block uppercase">Travelers</span>
                      <span>{lead.travelers_count || '1-4'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block uppercase">Source</span>
                      <span className="text-slate-400 font-mono text-[11px]">{lead.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
