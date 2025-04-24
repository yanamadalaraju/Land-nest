import React, { useState } from 'react';
import './Login.css'; // Import external CSS if needed
import LandNestLogo from './LandNestLogo.jpg'; // Your logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    console.log('Logging in with:', { email, password, rememberMe });
    // Add your login logic here
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <img src={LandNestLogo} alt="LandNest Logo" style={styles.logo} />
        <h2 style={styles.title}>Welcome to LandNest</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                type="button"
                style={styles.showPasswordBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div style={styles.rememberMe}>
            <input
              type="checkbox"
              id="remember"
              style={styles.checkbox}
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember" style={styles.rememberLabel}>Remember me</label>
          </div>

          <button type="submit" style={styles.loginButton}>Login</button>

          <div style={styles.links}>
            <a href="#" style={styles.link}>Forgot Password?</a>
            <a href="#" style={styles.link}>Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #2f3e46, #354f52)',
    padding: '20px',
  },
  loginBox: {
    backgroundColor: '#ffffff10',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    color: '#e9edc9',
  },
  logo: {
    width: '180px',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: '26px',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#d8f3dc',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fefae0',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #a3b18a',
    fontSize: '14px',
    outline: 'none',
    color: '#fff',
    backgroundColor: '#3a5a40',
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  showPasswordBtn: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#ccd5ae',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  checkbox: {
    marginRight: '8px',
    accentColor: '#b7e4c7',
  },
  rememberLabel: {
    fontSize: '14px',
    color: '#e9edc9',
  },
  loginButton: {
    backgroundColor: '#588157',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    fontSize: '14px',
  },
  link: {
    color: '#b5ead7',
    textDecoration: 'none',
  },
  error: {
    color: '#ff4d4f',
    backgroundColor: '#ffe6e6',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '20px',
    fontSize: '14px',
  },
};

export default Login;
