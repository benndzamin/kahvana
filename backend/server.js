const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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

  // Add the new user to the list
  usersDataList.push(newUser);

  // Return the newly created user
  res.json(newUser);
});

// DELETE endpoint to delete user
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  // Find the index of the user with the specified ID in the usersDataList
  const userIndex = usersDataList.findIndex((user) => user.id == userId);

  if (userIndex !== -1) {
    // Remove the user from the usersDataList
    const deletedUser = usersDataList.splice(userIndex, 1)[0];

    // Return the deleted user
    res.json(deletedUser);
  } else {
    // User with the specified ID not found
    res.status(404).json({ message: "User not found" });
  }
});


// PUT endpoint to edit user information
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body; // Assuming the request body contains updated user data

  // Find the index of the user with the specified ID in the usersDataList
  const userIndex = usersDataList.findIndex((user) => user.id == userId);

  if (userIndex !== -1) {
    // Update the user data
    usersDataList[userIndex] = updatedUser;

    // Return the updated user
    res.json(updatedUser);
  } else {
    // User with the specified ID not found
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
