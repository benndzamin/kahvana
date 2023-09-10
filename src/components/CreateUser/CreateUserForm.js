import { useState } from "react";

function CreateUserForm(props) {

    return (
        <div className="modal-overlay">
              <div className="modal">
              <form>
                <span className="close-button" onClick={props.onCancel}>
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
                    <button className="btn" type="button" onClick={props.onCancel}>Cancel</button>
                    <button className="btn" type="submit">Add User</button>
                </div>
              </form>
              </div>
            </div>
    );

}

export default CreateUserForm;