import React, { useEffect } from 'react';


const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const colors = {
    success: { bg: '#d3f9d8', border: '#69db7c', text: '#1e6f2e' },
    error:   { bg: '#ffe3e3', border: '#ff8787', text: '#c92a2a' },
    info:    { bg: '#e7f5ff', border: '#74c0fc', text: '#1864ab' },
  };

  const { bg, border, text } = colors[type] || colors.success;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      background: bg,
      border: `1px solid ${border}`,
      color: text,
      padding: '12px 20px',
      borderRadius: '12px',
      fontWeight: '600',
      fontSize: '0.9rem',
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      maxWidth: '300px',
      animation: 'slideIn 0.3s ease',
    }}>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
      <span>{message}</span>
      <button onClick={onClose} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: text, fontWeight: 'bold', fontSize: '1rem', padding: 0
      }}>×</button>
    </div>
  );
};

export default Toast;
