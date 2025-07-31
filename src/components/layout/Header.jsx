import React, { useState, useCallback, useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = useMemo(() => [
    { href: '/', label: 'Home', description: 'Welcome to our app' },
    { href: '/about', label: 'About', description: 'Learn more about us' },
    { href: '/contact', label: 'Contact', description: 'Get in touch' },
  ], []);

  const currentTheme = useMemo(() => 
    themes.find((t) => t.id === theme), 
    [themes, theme]
  );

  const handleThemeChange = useCallback((newTheme) => {
    setTheme(newTheme);
    setIsDropdownOpen(false);
  }, [setTheme]);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(prev => !prev);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            ThemeApp
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav hidden md:flex">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href} 
              className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              title={item.description}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Theme Selector */}
        <div className="theme-selector relative">
          <button 
            onClick={toggleDropdown} 
            className="theme-button"
            aria-label="Select theme"
            aria-expanded={isDropdownOpen}
          >
            <span>{currentTheme?.name}</span>
            <ChevronDown 
              className={`chevron transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          {isDropdownOpen && (
            <div className="dropdown">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => handleThemeChange(themeOption.id)}
                  className={`dropdown-item ${theme === themeOption.id ? 'active' : ''}`}
                  title={themeOption.description}
                >
                  <span>{themeOption.name}</span>
                  {theme === themeOption.id && (
                    <span className="checkmark">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="mobile-menu-button md:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                to={item.href} 
                className={`mobile-nav-link ${location.pathname === item.href ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="mobile-theme-selector">
            <h3 className="mobile-theme-title">Select Theme</h3>
            <div className="mobile-theme-options">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => {
                    handleThemeChange(themeOption.id);
                    closeMobileMenu();
                  }}
                  className={`mobile-theme-option ${theme === themeOption.id ? 'active' : ''}`}
                >
                  <span>{themeOption.name}</span>
                  <p className="theme-description">{themeOption.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 