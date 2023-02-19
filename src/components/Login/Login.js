import React, {
  useState,
  useEffect,
  useReducer
} from 'react';

import Card from '../UI/Card/Card'
import classes from './Login.module.css';
import Button from '../UI/Buttons/Button';

//can be created outside the component function
const emailReducer = (state, action) => {
  
  //handle action
  if (action.type == 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type == 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return {value: '', isValid: false};
};

// reducer for the password
const passwordReducer = (state, action) => {
  
  if (action.type == 'USER_PASS_INPUT'){
    return { value: action.val, isValid: action.val.trim().length > 6 }; 
  }
  if (action.type == 'USER_PASS_BLUR') {
    return { value: state.value, isValid: state.trim().length > 6 }
  }
  return { value: '', isValid: false };
}

const Login = (props) => {  
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  
  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    {
      value: '',
      isValid: undefined,
    }
  );
  
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    {
      value: '',
      isValid: undefined,
    }
  );
  
  // Use Effect Example
  useEffect(() => {
    
    //Check that this renders on every change of the dependecies
    // console.log("Change!");
    
    //waiting a bit to check if the entered data is correct
    const identifier = setTimeout(() => {
          //check that the id and password have the appropriate items/length
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );  
    }, 500);
    
    //clean up function
    //Clear the timer before a new one starts
    return () => {
      clearTimeout(identifier);  // clear the time based on identifier
    };
    
    //useEffet will run when the following are changed
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_PASS_INPUT', val: event.target.value});
    
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
    
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT__PASS_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  // console.log(passwordState);
  
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
