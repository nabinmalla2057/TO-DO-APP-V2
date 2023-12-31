const { Schema, moddel, model } = require("mongoose");
const commonSchema = require("../../utilis/commonSchema");
const { ObjectId } = Schema.Types;

const SubtaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  todo: { type: ObjectId, ref: "Todo" },

  ...commonSchema,
});

module.exports = model("Subtask", SubtaskSchema);
