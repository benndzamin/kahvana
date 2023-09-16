const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const usersDataList = require("./usersDataList.json");

// Parse JSON request bodies
app.use(bodyParser.json());

// GET endpoint to fetch all users
app.get("/api/users", (req, res) => {
  res.json({ users: usersDataList });
});

// POST endpoint to create a new user
app.post("/api/users", (req, res) => {
  // Assuming the request body contains user data
  const newUser = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber,
  };

  // Check if a user with the same email already exists
  const existingUser = usersDataList.find((user) => user.emailAddress === newUser.emailAddress);

  if (existingUser) {
    res.status(400).json({ message: "User with this email already exists" });
  } else {
    // Add the new user to the list
    usersDataList.push(newUser);

    // Write the updated data back to the JSON file
    fs.writeFile("./usersDataList.json", JSON.stringify(usersDataList), (err) => {
      if (err) {
        console.error("Error writing to JSON file:", err);
        res.status(500).json({ message: "Error creating user" });
      } else {
        // Return the newly created user
        res.json(newUser);
      }
    });
  }
});

// DELETE endpoint to delete user
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  // Find the index of the user with the specified ID in the usersDataList
  const userIndex = usersDataList.findIndex((user) => user.id == userId);

  if (userIndex !== -1) {
    // Remove the user from the usersDataList
    //const deletedUser = usersDataList.splice(userIndex, 1)[0];
    usersDataList.splice(userIndex, 1);
    
    // Write the updated data back to the JSON file (optional)
    fs.writeFile(
      "./usersDataList.json",
      JSON.stringify(usersDataList),
      (err) => {
        if (err) {
          console.error("Error writing to JSON file:", err);
        }
      }
    );

    // Return the updated user list as a response
    res.json({ users: usersDataList });
  } else {
    // User with the specified ID not found
    res.status(404).json({ message: "User not found" });
  }
});

// PUT endpoint to edit user information
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  // Find the index of the user with the specified ID in the usersDataList
  const userIndex = usersDataList.findIndex((user) => user.id == userId);

  if (userIndex !== -1) {
    // Check if the email is being changed to an email that already exists
    const emailConflict = usersDataList.find(
      (user) => user.emailAddress === updatedUser.emailAddress && user.id !== userId
    );

    if (emailConflict) {
      // Email conflict: Return a 400 Bad Request response
      res.status(400).json({ message: "User with this email already exists" });
    } else {
      // Update the user data
      usersDataList[userIndex] = updatedUser;

      // Write the updated data back to the JSON file
      fs.writeFile(
        "./usersDataList.json",
        JSON.stringify(usersDataList),
        (err) => {
          if (err) {
            console.error("Error writing to JSON file:", err);
            res.status(500).json({ message: "Error updating user" });
          } else {
            // Return the updated user
            res.json(updatedUser);
          }
        }
      );
    }
  } else {
    // User with the specified ID not found
    res.status(404).json({ message: "User not found" });
  }
});

// POST endpoint to search for users
app.post("/api/users/search", (req, res) => {
  // Get the search query from the request body
  const searchQuery = req.body.searchQuery.toLowerCase();

  // Filter the usersDataList based on the search query
  const matchingUsers = usersDataList.filter((user) =>
    // Check if any of the user's fields contain the search query
    user.id.toLowerCase().includes(searchQuery) ||
    user.firstName.toLowerCase().includes(searchQuery) ||
    user.lastName.toLowerCase().includes(searchQuery) ||
    user.emailAddress.toLowerCase().includes(searchQuery) ||
    user.phoneNumber.toLowerCase().includes(searchQuery)
  );

  if (matchingUsers.length > 0) {
    // Users found, return them as a response
    res.json({ users: matchingUsers });
  } else {
    // No matching users found, return a message
    res.status(404).json({ message: "No users found matching the search criteria" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
