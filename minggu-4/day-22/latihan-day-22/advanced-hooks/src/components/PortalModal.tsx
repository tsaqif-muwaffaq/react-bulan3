import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export default function PortalModal() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h3>React Portal Example</h3>
      <button onClick={() => setOpen(true)}>Buka Portal Modal</button>
      {open && createPortal(
        <div style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', padding: '1rem', borderRadius: '8px' }}>
            <h4>Ini dari Portal</h4>
            <button onClick={() => setOpen(false)}>Tutup</button>
          </div>
        </div>,
        document.getElementById('modal-root')!
      )}
    </div>
  )
}