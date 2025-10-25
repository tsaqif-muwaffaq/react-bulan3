import React from 'react'
import FocusInput from './components/FocusInput'
import ModalExample from './components/ModalExample'
import PortalModal from './components/PortalModal'
import withBorder from './components/withBorder'
import MouseTracker from './components/MouseTracker'

type BoxProps = {
  text: string
}

const Box: React.FC<BoxProps> = ({ text }) => (
  <div style={{ padding: '1rem' }}>{text}</div>
)

const EnhancedBox = withBorder(Box)

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>tugas react day 22</h1>
      <FocusInput />
      <ModalExample />
      <PortalModal />
      <EnhancedBox text="Ini adalah komponen HOC." />
      <MouseTracker
        render={(pos) => (
          <p>Posisi mouse: X: {pos.x}, Y: {pos.y}</p>
        )}
      />
    </div>
  )
}
