import React, { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Login from './components/Login';


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const logHandler = (email, password) => {
    //Check the email and password
    setIsLoggedIn(true); //temp login
  };
  
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  
  
  return (
    <>
      <main>
        {!isLoggedIn && <Login onLogin={logHandler}/>}
        {isLoggedIn && <MainPage />}       
      </main>

    </>
  );
}

export default App;
