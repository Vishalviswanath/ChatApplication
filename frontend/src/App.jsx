import { useState } from 'react';
import Login from './auth/login/Login';
import Home from './components/home/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return <>{isAuthenticated === true ? <Home /> : <Login />}</>;
}

export default App;
