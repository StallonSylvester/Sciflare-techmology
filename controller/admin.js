const Organization = require("../model/organizationSchema");
const User = require("../model/userSchema");

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

const getAllOrganizations = async (req, res) => {
  try {
    const response = await Organization.find();
    if (!response) {
      res.send({ message: "Organizations not founs" });
    } else {
      res.send({ message: "Organizations found", data: response });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const getOrganization = async (req, res) => {
  try {
    const id = req.param.id;
    if (!id) {
      res.send({ Message: "Enter id" });
    }
    const response = await Organization.findOne({ id: id });
    if (!response) {
      res.send({ message: "Organization not found" });
    } else {
      res.send({ message: "Organization found", data: response });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  getAllOrganizations,
  getOrganization,
};
