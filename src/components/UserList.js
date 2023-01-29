import React from "react";
import './UserList.css';

const UserList = (props) => {
  
  //delete the users if the user is clicked
  const deleteUser = (modeId) => {
    
    //make a copy of the array
    var array = props.users.slice();
    
    // find the object by using id and also the index
    var selected = array.filter(id => id['id'] === modeId);
    var index = array.indexOf(selected[0]);
    
    //remove the selected object and update the list
    array.splice(index, 1);
    props.setUsers(array);
    
  }
  
  
  return (
    <>
      <ul className="users">
        { props.users.length ?
        (props.users.map((user) => (
          <div className="users ul" onClick={() => deleteUser(user.id)} style={{cursor:'pointer'}}>
            {user.name} ({user.age} Years Old)
          </div>
        ))) : (<div>No Users</div>)
      }
      </ul>
    </>
  );
};

export default UserList;
