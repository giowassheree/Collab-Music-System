import { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome! You are logged in.</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
