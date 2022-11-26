import React, { useState } from "react";
import "./Form.css";
import Button from 'react-bootstrap/Button';


const UserForm = (props) => {
  const [enterUserName, setUserName] = useState("");
  const [enterAge, setAge] = useState("");
  
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
      return; // Return a message component here
    }
    
    if (+enterAge < 1) {
      return; // return a message here
    }
    
    // console.log(enterUserName, enterAge);    
    props.onFormSubmit(enterUserName, enterAge);
    // Setting the values back to empty
    setUserName("");
    setAge("");
  };
    
  return (
    <div>
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
