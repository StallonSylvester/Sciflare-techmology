const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  id: { type: String },
  username: { type: String },
  password: { type: String },
  role: { type: String },
  privileges: {
    canView: { type: Boolean, default: false },
    canEdit: { type: Boolean, default: false },
    canDelete: { type: Boolean, default: false },
  },
  organizationId: { type: String },
});

module.exports = mongoose.model("User", userSchema);
