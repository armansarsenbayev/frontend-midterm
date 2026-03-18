import React from 'react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>Calorie Tracker</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#diary">Diary</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;