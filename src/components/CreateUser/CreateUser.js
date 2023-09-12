import { useState } from "react";
import CreateUserForm from "./CreateUserForm";
import "./CreateUser.css";

function CreateUser(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveUserDataHandler = (enteredUsersData) => {
    const usersData = {
      ...enteredUsersData,
    };
    props.onAddUser(usersData);
    setIsModalOpen(false);
  };

  //open modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  //close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>KAHVANA</h1>
      <div className="button-container">
        <button className="btn" onClick={openModal}>
          ADD USER
        </button>

        <input type="text" className="search" placeholder="Search by ID" />
      </div>

      {isModalOpen && (
        <CreateUserForm
          onCancel={closeModal}
          onSaveUserData={saveUserDataHandler}
        />
      )}
    </div>
  );
}

export default CreateUser;
