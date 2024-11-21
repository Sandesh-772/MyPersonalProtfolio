import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import { Services } from './pages/Services';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;