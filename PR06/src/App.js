import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
		<>
			<div className="todo-app">
				<TodoList />
			</div>
			<Footer note="Abhishek Kayasth(20CS025)" />
		</>
  );
}

export default App;
