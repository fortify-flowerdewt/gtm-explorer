import { useState, useEffect } from 'react'
import GTMCommitmentExplorer from './GTMCommitmentExplorer'
import Login from './Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const session = localStorage.getItem('gtm-explorer-auth');
    if (session === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('gtm-explorer-auth', 'authenticated');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('gtm-explorer-auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <GTMCommitmentExplorer onLogout={handleLogout} />;
}

export default App
