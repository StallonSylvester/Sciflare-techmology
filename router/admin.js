const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const admin = require("../controller/admin");

router.get("/admin/get/user/:id", admin.getUser);
router.get("/admin/get/user", admin.getAllUsers);
router.get("/admin/get/organization/:id", admin.getOrganization);
router.get("/admin/get/organizations", admin.getAllOrganizations);

module.exports = router;
