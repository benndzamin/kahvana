const express = require('express')
const app = express()
const usersDataList = require('./usersDataList.json');

app.get('/api', (req, res) => {
    res.json({"users": usersDataList });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
