import React from 'react';
import UserStatus from './components/UserStatus';
import MessageBox from './components/MessageBox';
import StatusInfo from './components/StatusInfo';
import ProductList from './components/ProductList';
import TodoList from './components/TodoList';

function App() {
  const messages = ['Halo!', 'Selamat belajar React!'];
  const products = [
    { id: 1, name: 'Laptop', price: 12000000 },
    { id: 2, name: 'Mouse', price: 250000 },
    { id: 3, name: 'Keyboard', price: 750000 },
  ];
  const todos = [
    { id: 1, text: 'Belajar Conditional Rendering' },
    { id: 2, text: 'Mengerjakan Evaluasi Harian' },
  ];
  const emptyTodos = [];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>tugas React JS day 8</h1>

      <hr />
      <UserStatus isActive={true} />

      <hr />
      <MessageBox isLoggedIn={true} messages={messages} />

      <hr />
      <StatusInfo status="loading" />
      <StatusInfo status="success" />
      <StatusInfo status="error" />
      <StatusInfo status="unknown" />

      <hr />
      <ProductList products={products} />

      <hr />
      <TodoList todos={todos} />
      <TodoList todos={emptyTodos} />
    </div>
  );
}

export default App;
