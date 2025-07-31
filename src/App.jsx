import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/index.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/layout/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const themes = [
    { id: 'light', name: 'Light Theme' },
    { id: 'dark-sidebar', name: 'Dark Sidebar Theme' },
    { id: 'colorful-cards', name: 'Colorful Cards' }
  ];

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme;
    // Close sidebar when switching to non-sidebar theme
    if (newTheme !== 'dark-sidebar') {
      setSidebarOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Dark Sidebar theme layout
  if (theme === 'dark-sidebar') {
    return (
      <div className={`app ${theme}`}>
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h1 className="logo">ThemeApp</h1>
            <button 
              className="sidebar-close"
              onClick={closeSidebar}
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="sidebar-nav">
            <Link 
              to="/" 
              className={`sidebar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeSidebar}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`sidebar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeSidebar}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`sidebar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeSidebar}
            >
              Contact
            </Link>
          </nav>

          <div className="sidebar-footer">
            <div className="theme-selector">
              <select 
                value={theme} 
                onChange={(e) => toggleTheme(e.target.value)}
                className="theme-select"
              >
                {themes.map(themeOption => (
                  <option key={themeOption.id} value={themeOption.id}>
                    {themeOption.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="sidebar-main">
          <header className="sidebar-header-mobile">
            <button 
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>
            <h1 className="logo">ThemeApp</h1>
          </header>

          <main className="sidebar-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={closeSidebar} />
        )}
      </div>
    );
  }

  // Regular theme layout
  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div className="header-content">
          <h1 className="logo">ThemeApp</h1>
          
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="theme-selector">
            <select 
              value={theme} 
              onChange={(e) => toggleTheme(e.target.value)}
              className="theme-select"
            >
              {themes.map(themeOption => (
                <option key={themeOption.id} value={themeOption.id}>
                  {themeOption.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 