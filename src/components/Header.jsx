import React from 'react';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { toggleThemeReducer } from '../redux/themeSlice';

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  
  const dispatch = useDispatch();

  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="logo">MacroFit</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/diary">Diary</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => dispatch(toggleThemeReducer())} 
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;