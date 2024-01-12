const express = require("express");

const router = express.Router();
const {
  register_user,
  auth_user,
} = require("../controllers/user_controller");
const { authorize_user } = require("../middlewares/auth_middleware");

// sign up user
router.post("/signup", register_user);
// log in user
router.post("/login", auth_user);

module.exports = router;