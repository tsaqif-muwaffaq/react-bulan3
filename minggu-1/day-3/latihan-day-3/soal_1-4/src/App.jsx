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

import React from "react";
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Card from "./components/Card";
import Comment from "./components/Comment";

function App() {
  const commentData = {
    author: {
      name: "tsaqif muwaffaq",
      avatarUrl: "src/assets/foto.jpg",
    },
    text: "saya sangat menikmati belajar React!",
    date: new Date(),
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Tugas 1 */}
      <section>
        <h2>Tugas 1: Functional Component</h2>
        <Greeting name="ucup" />
        <Greeting name="ilham" />
      </section>

      <hr />

      {/* Tugas 2 */}
      <section>
        <h2>Tugas 2: Props & Validasi</h2>
        <ProductCard productName="chambre de lavain shooting love zip hoodie black" price={1500} stock={10} isAvailable={true} />
        <ProductCard productName="chambre de lavain blessed hoodie black" price={1200} />
      </section>

      <hr />

      {/* Tugas 3 */}
      <section>
        <h2>Tugas 3: Children Props</h2>
        <Card>
          <h3>Informasi Penting</h3>
          <p>Ini adalah teks di dalam Card.</p>
          <button>Selengkapnya</button>
        </Card>

        <Card>
          <img
            src="src/assets/foto produk chmb.jpeg"
            alt="Contoh"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <p>chambre de lavain badstar hoodie broken white.</p>
        </Card>
      </section>

      <hr />

      {/* Tugas 4 */}
      <section>
        <h2>Tugas 4: Komposisi Komponen</h2>
        <Comment author={commentData.author} text={commentData.text} date={commentData.date} />

        <Comment
          author={{
            name: "React Enthusiast",
            avatarUrl: "src/assets/foto.jpg",
          }}
          text="react membuat UI menjadi menyenangkan!"
          date={new Date()}
        />
      </section>
    </div>
  );
}

export default App;
