import React, { useState } from "react";
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
            <div className="modal-overlay">
              <div className="modal">
                <span className="close-button" onClick={closeModal}>
                  &times;
                </span>
                <h2>Add new user</h2>
                <div className="input">
                    <label>First name: </label>
                    <input type="text" required />
                </div><br/>
                <div className="input">
                    <label>Last name: </label>
                    <input type="text" required />
                </div><br/>
                <div className="input">
                    <label>email: </label>
                    <input type="text" required />
                </div><br/>
                <div className="input">
                    <label>Phone number: </label>
                    <input type="text" required />
                </div>
                <div className="new-expense__actions">
                    <button className="btn" type="button" onClick={closeModal}>Cancel</button>
                    <button className="btn" type="submit">Add Expense</button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}

export default CreateUser;