import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card'
import classes from './Login.module.css';
import Button from '../UI/Buttons/Button';

const Login = (props) => {  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  
  useEffect(() => {
    
    //Check that this renders on every change of the dependecies
    // console.log("Change!");
    
    //waiting a bit to check if the entered data is correct
    const identifier = setTimeout(() => {
          //check that the id and password have the appropriate items/length
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );  
    }, 500);
    
    //clean up function
    //Clear the timer before a new one starts
    return () => {
      clearTimeout(identifier);  // clear the time based on identifier
    };
    
    //useEffet will run when the following are changed
  }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);


  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
