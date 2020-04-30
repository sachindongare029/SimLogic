import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import $ from 'jquery';
import './App.scss';

class App extends Component {
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
