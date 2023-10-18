const express = require("express");
const router = express.Router();
// const auth = require("../middleware/auth");
const organization = require("../controller/organization");

router.post("/create/organization", organization.createOrganization);
router.patch("/update/organization", organization.updateOrganization);
router.delete("/delete/organization/:id", organization.deleteOrganization);
router.get("/get/organizations", organization.getOrganization);
router.get("/get/organization/:id", organization.getAllOrganizations);

module.exports = router;
