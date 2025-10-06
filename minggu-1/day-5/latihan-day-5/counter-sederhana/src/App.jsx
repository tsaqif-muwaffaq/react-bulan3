import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import ContactForm from "./components/ContactForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>tugas day 5</h1>

      <section>
        <h2>1. counter sederhana</h2>
        <Counter />
      </section>

      <section>
        <h2>2. user profile</h2>
        <UserProfile />
      </section>

      <section>
        <h2>3. formulir kontak</h2>
        <ContactForm />
      </section>

      <section>
        <h2>4. daftar todo</h2>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
