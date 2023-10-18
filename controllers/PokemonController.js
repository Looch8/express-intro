const express = require("express");

// create an instance of the express router
const router = express.Router();

// export the router so it can be used by the rest of the app
router.get("/", (request, response) => {
	response.json({
		message: "Hello world from a router",
	});
});

// Create out of CRUD
router.post("/", (request, response) => {
	response.json({
		message: "POST request received",
	});
});

module.exports = router;
