import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Add your login logic here (e.g., API call, validation)
    console.log(`Logging in with ${username} and ${password}`);
    setLoggedIn(true);
  };

  const handleSignup = (username, password) => {
    // Add your signup logic here (e.g., API call, validation)
    console.log(`Signing up with ${username} and ${password}`);
    // After successful signup, you might want to redirect or set logged in state
  };

  return (
      <div className="App">
        {!loggedIn ? (
            <>
              <Login handleLogin={handleLogin} />
              <Signup handleSignup={handleSignup} />
            </>
        ) : (
            <h2>Welcome! You are logged in.</h2>
        )}
      </div>
  );
};

export default App;
