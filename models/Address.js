import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: "user" },
  fullName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  county: { type: String, required: true },
  location: { type: String, required: true },
});

const Address =
  mongoose.models.address || mongoose.model("address", addressSchema);

export default Address;
