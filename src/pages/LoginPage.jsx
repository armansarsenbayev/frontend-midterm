import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    const result = login(email, password);

    if (result.success) {
      navigate('/', { replace: true });
    } else {
      setError(result.error);
    }

    setIsLoading(false);
  };

  return (
    <div className="dashboard-container" style={{ justifyContent: 'center', minHeight: '80vh', paddingTop: '60px' }}>
      <div className="title-section">
        <h2>Welcome to MacroFit</h2>
        <p>Sign in to track your nutrition</p>
      </div>

      <div className="card" style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
        <h3>🔐 Sign In</h3>

        <div style={{
          background: '#e8f5e9',
          border: '1px solid #a5d6a7',
          borderRadius: '8px',
          padding: '10px 14px',
          marginBottom: '16px',
          fontSize: '0.85rem',
          color: '#2e7d32'
        }}>
          <strong>Demo credentials:</strong><br />
          Email: user@macrofit.com<br />
          Password: 123456
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="weight-input"
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="weight-input"
            disabled={isLoading}
          />

          {error && (
            <p style={{ color: '#ff4d4f', fontSize: '0.9rem', marginBottom: '10px', textAlign: 'center' }}>
              ❌ {error}
            </p>
          )}

          <button type="submit" className="my-btn" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
