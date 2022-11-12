import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
