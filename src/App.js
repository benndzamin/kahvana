// App.js
import { useEffect, useState } from "react";
import CreateUser from "./components/CreateUser/CreateUser.js";
import Users from "./components/Users.js";
import "./App.css";
import SearchUser from "./components/SearchUser.js";

function App() {
  // Set state
  const [backendData, setBackendData] = useState([]);

  const addUserHandler = (user) => {
    // Update the state by adding user
    setBackendData((prevData) => [...prevData, user]);
  };

  const deleteUserHandler = (userId) => {
    // Update the state by removing the deleted user
    setBackendData((prevData) => prevData.filter((user) => user.id !== userId));
  };

  const editUserHandler = (editedUserData) => {
    // Update the state by editing user data
    setBackendData((prevData) => {
      const updatedData = prevData.map((user) => {
        if (user.id === editedUserData.id) {
          return { ...user, ...editedUserData };
        }
        return user;
      });
      return updatedData;
    });
  };

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.users);
      });
  }, []);

  return (
    <div>
      <h1>KAHVANA</h1>
      <div className="button-container">
        <CreateUser onAddUser={addUserHandler} />
        <SearchUser
          onUserFound={(results) => setBackendData(results)} // Passing the found user from SearchUser to state
        />
      </div>
      <Users
        items={backendData}
        onDeleteUser={deleteUserHandler}
        onEditUser={editUserHandler}
      />
    </div>
  );
}

export default App;
