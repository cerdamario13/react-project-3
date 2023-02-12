import React from 'react';

import Nav from './Nav';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Login</h1>
      <Nav isLoggedIn={props.isAuth} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
