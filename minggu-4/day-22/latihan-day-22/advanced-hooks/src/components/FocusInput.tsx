import React, { useRef } from 'react'

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h3>useRef Example</h3>
      <input ref={inputRef} type="text" placeholder="Klik tombol untuk fokus" />
      <button onClick={() => inputRef.current?.focus()} style={{ marginLeft: '0.5rem' }}>
        Fokuskan Input
      </button>
    </div>
  )
}