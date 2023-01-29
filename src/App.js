import React, { useState } from 'react';
import './App.css';
import UserForm from './components/Form';
import UserList from './components/UserList';


function App() {
  
  //For user list
  const [users, setUsers] = useState([]);
  
  const addUser = (uName, uAge) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList, {key: Math.random().toString(), name: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  
  return (
    <>
      <UserForm onFormSubmit={addUser}></UserForm>
      <UserList users={users} setUsers={setUsers}></UserList>
    </>
  );
}

export default App;
