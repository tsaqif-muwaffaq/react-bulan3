import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react'

export interface ModalHandle {
  open: () => void
  close: () => void
}

const Modal = forwardRef<ModalHandle>((_, ref) => {
  const [visible, setVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }))

  if (!visible) return null

  return (
    <div style={{ background: 'rgba(0,0,0,0.4)', position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: '1rem', borderRadius: '8px' }}>
        <h4>Modal Imperatif</h4>
        <button onClick={() => setVisible(false)}>Tutup</button>
      </div>
    </div>
  )
})

export default function ModalExample() {
  const modalRef = useRef<ModalHandle>(null)

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h3>useImperativeHandle Example</h3>
      <button onClick={() => modalRef.current?.open()}>Buka Modal</button>
      <Modal ref={modalRef} />
    </div>
  )
}