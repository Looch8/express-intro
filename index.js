// import the server package
const express = require("express");

// make instace of server that we can customise and run
const app = express();

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

// GET localhost:3000/
app.get("/", (request, response) => {
	response.send("Hello World");
});

// activate the server
app.listen(PORT, HOST, () => {
	console.log("Server is running: " + PORT);
});
