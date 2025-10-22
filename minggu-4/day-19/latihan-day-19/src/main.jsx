// // src/main.jsx
// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { ThemeProvider } from "@/theme/ThemeProvider";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ThemeProvider } from "./components/theme-provider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
