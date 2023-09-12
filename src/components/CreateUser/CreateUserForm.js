import axios from "axios";
import { useState } from "react";
const short = require("short-uuid");
const translator = short();

function CreateUserForm(props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // State to manage form input values
  const [formData, setFormData] = useState({
    id: translator.new(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend API to create a new user
      await axios.post("/api/users", formData);

      // Clear the form after successful submission
      setFormData({
        id: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
      });

      // Show the success message and after 1.3 seconds hide it
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        //after showing success message trigger the state to rerender data
        props.onSaveUserData(formData);
      }, 1300);
      
    } catch (error) {
      // Handle errors if the POST request fails
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <span className="close-button" onClick={props.onCancel}>
            &times;
          </span>
          <h2>Add new user</h2>

          {showSuccessMessage && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="alert alert-success">
                  User successfully added
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
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUserForm;
