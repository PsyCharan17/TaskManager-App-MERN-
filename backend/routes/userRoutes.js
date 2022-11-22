const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");
const router = express.Router();

router.route("/").post(registerUser); // Going to use a controller inside the post method
router.route("/login").post(authUser);

module.exports = router;
