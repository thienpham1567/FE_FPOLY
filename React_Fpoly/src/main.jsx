import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lab4 from './pages/Lab4/Lab4';
import Lab5 from './pages/Lab5/Lab5';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Lab4" element={<Lab4 />} />
          <Route path="Lab5" element={<Lab5 />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
