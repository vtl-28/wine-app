const User = require("../models/user");
const generate_token = require("../config/generate_token");

const register_user = async (req, res) => {
    debugger
    const {
      name,
      email,
      password
    } = req.body;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
    if (
      !name ||
      !email ||
      !password
    ) {
      res.status(400).send("Please enter all the fields");
      return;
    }
  
    const user_exists = await User.findOne({ email });
  
    if (user_exists) {
      res.status(400).send("User already exists");
      return;
    }
  
    if (!emailRegex.test(email)) {
      res.status(400).send("Invalid email");
      return;
    }

    try {
      const user = await User.create({
        name,
        email,
        password,
      });
  
      if (user) {
        const token = generate_token(user._id);
        user.token = token;
        console.log(user)
        res.status(201).send(user);
      } else {
        res.status(400).send("Could not register user");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };

  const auth_user = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.status(400).send("Please enter all the fields");
      return;
    }
  
    const user = await User.findOne({ email });
  
    if (!user) {
      res.status(400).send("User does not exist");
      return;
    }
  
    try {
      if(user && (await user.matchPassword(password))) {
        const token = generate_token(user._id);
        user.token = token;
        res.status(201).send(user);
      } else {
        res.status(401).send("Invalid Email or Password");
      }
    } catch (error) {
      res.status(401).send(error);
    }
  };

  module.exports = { register_user, auth_user}