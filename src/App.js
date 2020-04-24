import React from 'react';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
