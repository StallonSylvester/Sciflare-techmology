const mongoose = require("mongoose");
const schema = mongoose.Schema;

const organizationSchema = new schema({
  id: { type: String },
  name: { type: String },
});

module.exports = mongoose.model("Organization", organizationSchema);
