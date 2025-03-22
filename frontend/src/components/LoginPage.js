// src/components/LoginPage.js
import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Logging in with:', { email, password });
    // e.g., fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.field}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.toggleText}>
        Don’t have an account? 
        {/* Link to your SignUp page */}
        <a href="/signup" style={{ color: '#e74c3c', textDecoration: 'none', marginLeft: '0.25rem' }}>
          Sign Up
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Inter, sans-serif',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    marginTop: '4rem',
  },
  heading: {
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '0.25rem',
  },
  button: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  toggleText: {
    color: '#555',
    fontSize: '0.9rem',
  },
};

export default LoginPage;
