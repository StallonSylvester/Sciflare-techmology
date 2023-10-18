const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const user = require("../controller/user");

router.post("/signup/user", user.postSignUp);
router.post("/login/user", user.postLogin);
router.post("/create/user", user.createUser);
router.patch("/update/user", user.updateUser);
router.delete("/delete/user/:id", user.deleteUser);
router.get("/get/user/:id", user.getUser);
router.get("/get/user", user.getAllUsers);

module.exports = router;
