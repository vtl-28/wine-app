const express = require("express");

const router = express.Router();
const {
  register_user,
  auth_user,
} = require("../controllers/user_controller");

router.post("/signup", register_user);
router.post("/login", auth_user);

module.exports = router;