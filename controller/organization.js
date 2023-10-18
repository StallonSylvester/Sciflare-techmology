const Organization = require("../model/organizationSchema");
const uuid = require("uuid");

const createOrganization = async (req, res) => {
  try {
    let { name, password, role } = req.body;
    if (!name || !password || !role) {
      res.send({ Message: "Enter all data" });
    }
    let id = uuid();
    const response = await new Organization({
      id,
      name,
      password,
      role,
    }).save();
    if (!response) {
      res.send({ message: "Organization not created" });
    } else {
      res.send({ message: "Organization created successfully" });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const updateOrganization = async (req, res) => {
  try {
    let { name, password, role, id } = req.body;
    const response = await Organization.findByIdAndUpdate(
      { id: id },
      {
        $set: {
          name,
          password,
          role,
        },
      },
      {
        new: true,
      }
    );
    if (!response) {
      res.send({ message: "Organization not updated" });
    } else {
      res.send({ message: "Organization updated successfully" });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const deleteOrganization = async (req, res) => {
  try {
    const id = res.param.id;
    if (!id) {
      res.send({ Message: "Enter id" });
    }
    const response = await Organization.findByIdAndRemove({ id: id });
    if (!response) {
      res.send({ message: "Organization not deleted" });
    } else {
      res.send({ message: "Organization deleted successfully" });
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
  createOrganization,
  updateOrganization,
  deleteOrganization,
  getOrganization,
  getAllOrganizations,
};
