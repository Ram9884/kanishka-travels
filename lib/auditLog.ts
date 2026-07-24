// lib/auditLog.ts
// Centralized audit trail logger for Kanishka Travels admin operations

export interface AuditEntry {
  id: string;
  timestamp: string;
  action: 'Tariff Updated' | 'Vehicle Added' | 'Vehicle Updated' | 'Driver Registered' | 'Driver Status Changed' | 'Booking Confirmed' | 'Booking Cancelled' | 'Driver Assigned';
  details: string;
  performedBy: string;
}

const AUDIT_LOG_KEY = 'kt_admin_audit_logs';

export const logAdminAction = (action: AuditEntry['action'], details: string, performedBy = 'S. Ramesh (Admin)') => {
  if (typeof window === 'undefined') return;

  const newEntry: AuditEntry = {
    id: `audit-${Date.now()}`,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    action,
    details,
    performedBy,
  };

  try {
    const existing = JSON.parse(localStorage.getItem(AUDIT_LOG_KEY) || '[]');
    const updated = [newEntry, ...existing].slice(0, 100); // keep last 100 logs
    localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(updated));
    console.log(`[AUDIT LOG] ${newEntry.action}: ${newEntry.details}`);
  } catch (err) {
    console.error('Audit logging failed:', err);
  }
};

export const getAuditLogs = (): AuditEntry[] => {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(AUDIT_LOG_KEY) || '[]');
  } catch {
    return [];
  }
};
