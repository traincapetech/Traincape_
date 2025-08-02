import React, { useState } from 'react';
import '../index.css'; 

function CertificateLookup() {
  const [certificateId, setCertificateId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const response = await fetch(`/api/certificate/${certificateId}`);
      const data = await response.json();
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.message || 'Certificate not found');
      }
    } catch (err) {
      setError('Error connecting to server');
    }
    setLoading(false);
  };

  return (
    <div className="container-wrapper">
      <div className="container">
        <header className="header">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1>CertiVault</h1>
          </div>
          <nav className="nav-links">
            <span>10,000+ Certificates</span>
            <span>Global Verification</span>
          </nav>
        </header>

        <main className="main-content">
          <section className="hero">
            <div className="badge">Instant Certificate Verification</div>
            <h2>Verify Your <span className="highlight">Certificate</span></h2>
            <p>Enter your unique Certificate ID below to instantly verify its authenticity.</p>
            <div className="verification-card">
              <div className="card-title">
                <div className="title-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 21L16.65 16.65" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <strong>Certificate Verification</strong>
              </div>
              <form className="verification-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Certificate ID (e.g., CERT-2024-001)"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify'}
                </button>
              </form>
              {error && <div className="error-message">{error}</div>}
              {result && (
                <div className="result-card">
                  <h4>Certificate Details</h4>
                  <p><strong>Name:</strong> {result.fullName}</p>
                  <p><strong>Course:</strong> {result.courseName}</p>
                  <p><strong>Issued By:</strong> {result.issuedBy}</p>
                  <p><strong>Issue Date:</strong> {new Date(result.issueDate).toLocaleDateString()}</p>
                  {result.certificateURL && (
                    <p>
                      <a href={result.certificateURL} target="_blank" rel="noopener noreferrer">
                        View Certificate
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>

          <section className="features">
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Secure Verification</h3>
              <p>Blockchain-backed security guarantees certificate integrity.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" fill="#10B981" fillOpacity="0.2"/>
                  <path d="M13 2L13 9H20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15.5L11 17.5L15 13.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Instant Results</h3>
              <p>Lightning-fast response with verified information.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2"/>
                  <path d="M2 12h20" stroke="#EF4444" strokeWidth="2"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 18 15.3 15.3 0 0 1-8 0 15.3 15.3 0 0 1 4-18z" stroke="#EF4444" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Global Access</h3>
              <p>Verify from anywhere in the world, 24/7.</p>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="container footer-container">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <h3>CertiVault</h3>
              <p>Trusted Certificate Verification</p>
            </div>
          </div>
          <div className="copyright">
            © 2024 CertiVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CertificateLookup;
