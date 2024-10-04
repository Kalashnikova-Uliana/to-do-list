import React from 'react';
import logo from './logo.svg';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Todolist/>
    </div>
  );
}


function Todolist() {
  return (
    <div className="todolist-container">
      <h3>What to learn</h3>
      <div>
        <input type="text" placeholder="Add new task" />
        <button>+</button>
      </div>
      <ul>
        <li><input type="checkbox" checked={true} /><span>CSS & HTML</span></li>
        <li><input type="checkbox" checked={true} /><span>JS</span></li>
        <li><input type="checkbox" checked={false} /><span>React</span></li>
      </ul>
    </div>
  );
}