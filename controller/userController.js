// const Users = require("../Models/userSceema.js");

const jwt = require("jsonwebtoken");
const users = require("../Models/usersceema");
const bcrypt = require("bcryptjs");
const jwtSecret = "jwt-secretyuiop-wjcgeejke";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new users({ name, email, password: hashPassword });
  await newUser.save();
  res.status(201).json("User Created");
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await users.findOne({ email });
    console.log(req.body);
    if (!validUser) return 404, "User not found!";
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return 401, "Wrong credential!";
    const data = {
      user: {
        id: validUser.id,
      },
    };
    const authToken = jwt.sign(data, jwtSecret);
    return res.status(200).json({ success: true, authToken: authToken });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, Login };
