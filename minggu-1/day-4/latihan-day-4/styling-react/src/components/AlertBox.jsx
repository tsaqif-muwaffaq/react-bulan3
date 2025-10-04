// 4
import React from 'react';


export default function AlertBox({ type = 'info', message }) {
const base = {
padding: '12px 16px',
borderRadius: '8px',
marginBottom: '10px',
fontWeight: 600,
maxWidth: '640px'
};


const typeStyles = {
success: { backgroundColor: '#89ffa4ff', color: '#155724', border: '1px solid #00f93aff' },
warning: { backgroundColor: '#fee284ff', color: '#856404', border: '1px solid #ffbf00fe' },
error: { backgroundColor: '#ff9fa7ff', color: '#721c24', border: '1px solid #ff0019ff' },
info: { backgroundColor: '#e2f0ff', color: '#084298', border: '1px solid #43aaffff' }
};


const style = { ...base, ...(typeStyles[type] || typeStyles.info) };


return <div style={style}>{message}</div>;
}