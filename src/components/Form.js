import React, { useState, useRef } from "react";
import "./Form.css";
import Button from 'react-bootstrap/Button';
import ErrorModal from "./ErrorModal";


const UserForm = (props) => {
  
  //Using refs to show how to make code shorter
  const nameInputRef = useRef();
  const [enterAge, setAge] = useState(""); //using state
  const [error, setError] = useState();
  
  
  //For Age
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    if (nameInputRef.current.value.trim().length === 0 || enterAge.trim().length === 0){
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age.'
      });
      return;
    }
    
    if (+enterAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a number greater than 0'
      });
      return; 
    }
    
    // console.log(enterUserName, enterAge);    
    props.onFormSubmit(nameInputRef.current.value, enterAge);
    // Setting the values back to empty
    setAge("");
    nameInputRef.current.value = ''; //this is only for forms. It is not recommended to change the DOM...
  };
  
  const errorHandler = () => {
    setError(null);
  };
    
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
      <form id="goal-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label>User Name</label>
          <input 
            type="text"
            // value={enterUserName}
            // onChange={userNameHandler}
            ref={nameInputRef}
          ></input>
        </div>
        <div className="form-control">
          <label>Age(Years)</label>
          <input
            type="number"
            value={enterAge}
            onChange={ageHandler}
          ></input>
        </div>
        <div>
          <Button type="submit" variant="outline-primary">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
