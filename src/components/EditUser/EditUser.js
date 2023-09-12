import "./EditUser.css";
import axios from "axios";
import { useState } from "react";

function EditUserForm(props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // State to manage form input values
  const [formData, setFormData] = useState({
    // Initialize form data with the selected user's data
    id: props.editData.id,
    firstName: props.editData.firstName,
    lastName: props.editData.lastName,
    emailAddress: props.editData.emailAddress,
    phoneNumber: props.editData.phoneNumber,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API to create a new user
      await axios.put(`/api/users/${formData.id}`, formData);

      // Show the success message and after 1.3 seconds hide it
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        //Trigger state change to rerender data
        props.onUpdateUser(formData);
      }, 1300);
    } catch (error) {
      // Handle errors if the POST request fails
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={handleEdit}>
          <span className="close-button" onClick={props.onCancel}>
            &times;
          </span>
          <h2>Edit user</h2>

          {showSuccessMessage && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="alert alert-success">
                  User successfully edited
                </div>
              </div>
            </div>
          )}

          <div className="input">
            <label>First name: </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div className="input">
            <label>Last name: </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div className="input">
            <label>email: </label>
            <input
              type="text"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div className="input">
            <label>Phone number: </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="new-expense__actions">
            <button className="btn" type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button className="btn" type="submit">
              Edit User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserForm;
