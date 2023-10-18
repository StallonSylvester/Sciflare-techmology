const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const user = require("./router/userRouter.js");
const organization = require("./router/organizationRouter");
const admin = require("./router/admin");

// cors
app.use(cors());

// convert everything to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://localhost.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));

app.use("/api", user);
app.use("/api", organization);
app.use("/api", admin);

module.exports = app;
