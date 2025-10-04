// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react';
import ProfileBox from './components/ProfileBox';
import AboutCard from './components/AboutCard';
import Button from './components/Button';
import AlertBox from './components/AlertBox';
import ResponsiveBox from './components/ResponsiveBox';
import './index.css';


export default function App() {
return (
<div style={{ padding: 20 }}>
<h1 style={{ textAlign: 'center' }}>tugas day 4</h1>


<section>
<h2>1. Inline Styles</h2>
<ProfileBox />
</section>


<section>
<h2>2. CSS Classes & className</h2>
<AboutCard />
</section>


<section>
<h2>3. CSS Modules</h2>
<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
<Button onClick={() => alert('Default clicked')}>Default Button</Button>
<Button type="primary" onClick={() => alert('Primary clicked')}>Primary Button</Button>
</div>
</section>


<section>
<h2>4. Dynamic Styling dengan Props</h2>
<AlertBox type="success" message="Berhasil menyimpan data." />
<AlertBox type="warning" message="Periksa kembali input Anda." />
<AlertBox type="error" message="Terjadi kesalahan. Coba lagi." />
</section>


<section>
<h2>5. Responsive Design</h2>
<ResponsiveBox />
</section>
</div>
);
}