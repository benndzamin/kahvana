// SearchUser.js
import axios from "axios";
import React, { useState } from "react";

function SearchUser(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState(false);

  const handleSearchInputChange = (e) => {
    // Update searchQuery state when input changes
    setSearchQuery(e.target.value);
  };

  const searchFunction = async () => {
    try {
      const response = await axios.post("/api/users/search", { searchQuery });
      const matchingUsers = response.data.users;

      if (matchingUsers.length > 0) {
        // Users found, set them in state
        props.onUserFound(matchingUsers);
        setMessage(`${matchingUsers.length} user(s) found!`);
        setTimeout(() => {
          setMessage(false);
        }, 1300);
      } else {
        // No matching users found, show a message
        setMessage("No users found matching the search criteria");
        setTimeout(() => {
          setMessage(false);
        }, 1300);
      }
    } catch (error) {
      console.error("Error searching for users:", error);
      setMessage("No users found matching the search criteria");
      setTimeout(() => {
        setMessage(false);
      }, 1300);
    }
  };

  return (
    <div className="button-container">
      {message && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="alert alert-success">{message}</div>
          </div>
        </div>
      )}
      <input
        type="text"
        className="search"
        placeholder="Search by ID, first name, last name, email or phone"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button className="btn" onClick={searchFunction}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchUser;
