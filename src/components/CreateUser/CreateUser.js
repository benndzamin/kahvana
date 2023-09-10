import { useState } from "react";
import CreateUserForm from "./CreateUserForm";
import "./CreateUser.css";

function CreateUser() {

    const [isModalOpen, setIsModalOpen] = useState(false);

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
          <button className="btn" onClick={openModal}>
            ADD USER
          </button>
    
          {isModalOpen && (
            <CreateUserForm onCancel={closeModal} />
          )}
        </div>
      );
};

export default CreateUser;