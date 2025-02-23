import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;