const User = require("../model/userSchema");
const uuid = require("uuid");

const postSignUp = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      res.send({ Message: "Enter all data" });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      res.send({ message: "User Already exist please login", status: false });
    } else {
      res.send({ Message: "User signed up successfully", status: true });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const postLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      res.send({ Message: "Enter all data" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      res.send({
        message: "User not found please signup first",
        status: false,
      });
    } else {
      res.send({ Message: "User logged in successfully", status: true });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const createUser = async (req, res) => {
  try {
    let { username, password, privileges, organizationId } = req.body;
    if (!username || !password || !privileges || !organizationId) {
      res.send({ Message: "Enter all data" });
    }
    let id = uuid();
    const response = await new User({
      id,
      username,
      password,
      role,
      privileges,
      organizationId,
    }).save();
    if (!response) {
      res.send({ message: "User not created" });
    } else {
      res.send({ message: "User created successfully" });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    let { username, password, privileges, id } = req.body;
    const response = await User.findByIdAndUpdate(
      { id: id },
      {
        $set: {
          username,
          password,
          role,
          privileges,
        },
      },
      {
        new: true,
      }
    );
    if (!response) {
      res.send({ message: "User not created" });
    } else {
      res.send({ message: "User created successfully" });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = res.param.id;
    if (!id) {
      res.send({ Message: "Enter id" });
    }
    const response = await User.findByIdAndRemove({ id: id });
    if (!response) {
      res.send({ message: "User not deleted" });
    } else {
      res.send({ message: "User deleted successfully" });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await User.find();
    if (!response) {
      res.send({ message: "User not founs" });
    } else {
      res.send({ message: "User found", data: response });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.param.id;
    if (!id) {
      res.send({ Message: "Enter id" });
    }
    const response = await User.findOne({ id: id });
    if (!response) {
      res.send({ message: "User not found" });
    } else {
      res.send({ message: "User found", data: response });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

module.exports = {
  postSignUp,
  postLogin,
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
};
