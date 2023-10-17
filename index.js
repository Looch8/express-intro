// import the server package
const express = require("express");

// make instace of server that we can customise and run
const app = express();

// GET localhost:3000/
app.get("/", (request, response) => {
	response.send("Hello World");
});

// activate the server
app.listen(3000, () => {
	console.log("Server is running");
});
