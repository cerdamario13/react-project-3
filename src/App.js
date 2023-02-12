import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Login from './components/Login';
import MainHeader from './MainHeader/MainHeader';


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    // Check when the app restarts or the user refreshes if the user is logged in
    useEffect(() => {
      const storedUserInfo = localStorage.getItem('isLoggedIn');
      
      if (storedUserInfo === '1') {
        setIsLoggedIn(true);
      }
      //This will only run once the app is started
    }, []);
  
  const logHandler = (email, password) => {
    //Check the email and password
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true); //temp login
  };
    
  
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  
  console.log(isLoggedIn);
  
  return (
    <>
      <MainHeader isAuth={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={logHandler}/>}
          {isLoggedIn && <MainPage />}       
        </main>
    </>
  );
}

export default App;
