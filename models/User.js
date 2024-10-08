import mongoose from "mongoose";
import { Schema, model} from "mongoose";

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String},
    username: {type: String, required: true},
    profilepic: { type: String},
    coverpic: { type: String},
    razorpayid: {type: String},
    razorpaysecret: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export default mongoose.models.User || model("User", UserSchema);