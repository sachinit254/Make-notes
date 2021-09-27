const asynchandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken")

const registerUser = asynchandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  // first we check user is exists in database or not
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token:generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

// LOGIN USER 
const authUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token:generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = {
  registerUser,
  authUser,
};

