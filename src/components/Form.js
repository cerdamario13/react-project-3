import React, { useState } from "react";
import "./Form.css";
import Button from 'react-bootstrap/Button';
import ErrorModal from "./ErrorModal";


const UserForm = (props) => {
  const [enterUserName, setUserName] = useState("");
  const [enterAge, setAge] = useState("");
  const [error, setError] = useState();
  
  //For user name
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  
  //For Age
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0){
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
    props.onFormSubmit(enterUserName, enterAge);
    // Setting the values back to empty
    setUserName("");
    setAge("");
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
            value={enterUserName}
            onChange={userNameHandler}
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
