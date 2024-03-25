import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Pages/Login/Login'; // Assuming you have a Login component
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [roles , setRoles] = useState('');
  const [userName , setUserName] = useState('');
  const [userEmail , setUserEmail] = useState('');

  // console.log(roles , userName , userEmail )


  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <App roles={roles} />
      ) : (
        <Login onLogin={handleLogin} setUserEmail={setUserEmail}  setUserName={setUserName} setRoles={setRoles} />
      )}
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
