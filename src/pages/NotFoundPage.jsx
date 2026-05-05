import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container" style={{ paddingTop: '60px', textAlign: 'center' }}>
      <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>

        <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔍</div>

        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>404</h2>
        <h3 style={{ marginBottom: '12px', fontWeight: '500' }}>Page not found</h3>

        <p style={{ color: '#6c757d', lineHeight: '1.6', marginBottom: '24px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button className="my-btn" onClick={() => navigate('/')}>
            Go to Dashboard
          </button>
          <button
            className="my-btn"
            onClick={() => navigate(-1)}
            style={{ background: '#343a40' }}
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
