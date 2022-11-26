import React from "react";
import './UserList.css';

const UserList = (props) => {
  return (
    <>
      <ul className="users">
        { props.users.length ?
        (props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) Years Old
          </li>
        ))) : (<div>No Users</div>)
      }
      </ul>
    </>
  );
};

export default UserList;
