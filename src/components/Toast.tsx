import React from 'react';
import { useSaved } from '../context/SavedContext';
import { CheckCircle2, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useSaved();

  if (!toastMessage) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.9rem 1.4rem',
        backgroundColor: '#271e1a',
        color: '#f5eee6',
        borderRadius: '8px',
        border: '1px solid #c28b5b',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.65)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9rem',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {toastMessage.type === 'success' ? (
        <CheckCircle2 size={18} color="#c28b5b" />
      ) : (
        <Info size={18} color="#8e8073" />
      )}
      <span>{toastMessage.text}</span>
    </div>
  );
};
