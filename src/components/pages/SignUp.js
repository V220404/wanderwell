import React from 'react';

function App() {
  const appStyle = {
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const headerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    position: 'relative',
    zIndex: 1,
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    minWidth: '300px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
  };

  const formGroupStyle = {
    marginBottom: '1em',
    width: '100%',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5em',
  };

  const inputStyle = {
    padding: '0.5em',
    fontSize: '1em',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyle = {
    padding: '0.5em 1em',
    fontSize: '1em',
    marginTop: '1em',
    cursor: 'pointer',
    width: '100%',
    backgroundColor: '#61dafb',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
  };

  const forgotPasswordStyle = {
    background: 'none',
    border: 'none',
    color: '#61dafb',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginTop: '1em',
  };

  return (
    <div style={appStyle}>
      <video style={videoStyle} autoPlay loop muted>
        <source src="/Users/varunsankhe/Desktop/wanderwell Project/public/videos/sign.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header style={headerStyle}>
        <h1>Sign In</h1>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input type="email" id="email" name="email" required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password:</label>
            <input type="password" id="password" name="password" required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>Sign In</button>
          <button type="button" style={forgotPasswordStyle}>Forgot Password?</button>
        </form>
      </header>
    </div>
  );
}

export default App;
