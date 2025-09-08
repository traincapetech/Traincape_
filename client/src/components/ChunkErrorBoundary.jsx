import React from 'react';

class ChunkErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Chunk loading error:', error, errorInfo);
    
    // If it's a chunk loading error, try to reload the page
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
      console.log('Detected chunk loading error, attempting to reload...');
      // Wait a bit before reloading to avoid infinite loops
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa'
        }}>
          <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>
            🚨 Application Error
          </h2>
          <p style={{ marginBottom: '20px', color: '#6c757d' }}>
            We're experiencing a technical issue. The application will reload automatically in a few seconds.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reload Now
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChunkErrorBoundary; 