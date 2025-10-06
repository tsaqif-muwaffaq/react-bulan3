import { useState } from "react"
import "./App.css"

export default function App() {
  // struktur getter, setter
  const [ counter , setCounter ] = useState(0);

  //  Fungsi penambah & pengurang
  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  return (
    <>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',      //  Pusatkan horizontal
          justifyContent: 'center', // Pusatkan vertical
          minHeight: '100vh',        //  Penuhi tinggi layar agar pas di tengah
          textAlign: 'center'
        }}
      >
        <h1>Aplikasi Counter Sederhana</h1>

        {/*  Container tombol dan counter di tengah */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
          <button onClick={decrement} style={{ fontSize: '20px', padding: '10px 20px' }}>-</button>
          <p style={{ fontSize: '20px', margin: '0' }}>Jumlah Counter: {counter}</p>
          <button onClick={increment} style={{ fontSize: '20px', padding: '10px 20px' }}>+</button>
        </div>

        <input 
          type='text'
          value={counter}
          onChange={(hasil) => {
            setCounter(hasil.target.value);
          }}
          style={{ marginTop: '20px', padding: '5px', fontSize: '16px', textAlign: 'center' }}
        />
      </main>
    </>
  )
}
