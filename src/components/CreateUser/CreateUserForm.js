import axios from "axios";
import { useState } from "react";
const short = require("short-uuid");
const translator = short();

function CreateUserForm(props) {
  const [message, setMessage] = useState("");

  // State to manage form input values
  const [formData, setFormData] = useState({
    id: translator.new().toLowerCase(),
    firstName: "",
    lastName: "",
    emailAddress: "",
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

      setMessage("User successfuly added");
      setTimeout(() => {
        setMessage(false);
        props.onSaveUserData(formData);
      }, 1300);
    } catch (error) {
      // Handle errors if the POST request fails
      if (error.response && error.response.status === 400) {
        // Check for a 400 Bad Request response status (email already exists)
        // Show the success message and after 1.3 seconds hide it
        setMessage("User with this email already exists");
        setTimeout(() => {
          setMessage(false);
        }, 1300);
      } else {
        setMessage("An error occurred while creating the user");
        setTimeout(() => {
          setMessage(false);
        }, 1300);
      }
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

          {message && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="alert alert-success">{message}</div>
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
