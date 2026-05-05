import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleThemeReducer } from '../redux/themeSlice';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="logo">MacroFit</h1>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/diary">Diary</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => dispatch(toggleThemeReducer())}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
          {isAuthenticated && (
            <button onClick={handleLogout} className="theme-toggle-btn" style={{ borderColor: '#ff4d4f', color: '#ff4d4f' }}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;