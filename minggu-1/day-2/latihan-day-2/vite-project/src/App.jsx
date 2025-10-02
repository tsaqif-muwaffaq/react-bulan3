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

// src/App.jsx
// src/App.jsx
import React from "react";
import ProfileCard from "./components/ProfileCard";
import MathExpression from "./components/MathExpression";
import ConditionalMessage from "./components/ConditionalMessage";
import ListRenderer from "./components/ListRenderer";

export default function App() {
  const sampleProducts = [
    { id: "b1", name: "Apel" },
    { id: "b2", name: "Jeruk" },
    { id: "b3", name: "Mangga" },
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Inter, sans-serif" }}>
      <h1>tugas day 2</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>1. profile card</h2>
        <ProfileCard
          name="tsaqif muwaffaq"
          photo="src/assets/foto.jpg"
          bio="pelajar react dan membuat UI sederhana."
          skills={["javascript", "react", "css"]}
        />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>2. javascript expressions</h2>
        <MathExpression price={150000} discountPercent={20} userName="Tsaqif" />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>3. conditional rendering</h2>
        <ConditionalMessage isLoggedIn={true} messages={4} />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>4. render array data</h2>
        <ListRenderer items={sampleProducts} />
      </section>
    </div>
  );
}
