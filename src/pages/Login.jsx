import React, { useState } from "react";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Default credentials
    if (username === "test" && password === "password") {
      setIsAuthenticated(true); // Update authentication state
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <div style={styles.formGroup}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  formGroup: {
    margin: "10px 0",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    width: "100%",
    maxWidth: "300px",
    margin: "10px 0",
  },
  button: {
    backgroundColor: "#2a9d8f",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Login;
