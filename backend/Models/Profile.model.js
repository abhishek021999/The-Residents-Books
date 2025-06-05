import { Schema, model } from 'mongoose';

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"]
  },
  lastName: {
    type: String,
    default: ""
  },
  role: {
    type: String,
    required: [true, "Role is required"]
  },
  photo: {
    type: String 
  },
  linkedin: {
    type: String,
  },
  twitter: {
    type: String,
  }
}, {
  timestamps: true
});

const Profile = model("Profile", profileSchema);
export { Profile };
