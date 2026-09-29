import mongoose from 'mongoose'

const CreateProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  photo: {
    type: String, 
  },
  address: String,
  language: [String],
  experience: String,
  availability: String,
  teach: {
    type: [String],
    required: true
  },
  learn: {
    type: [String],
    required: true
  }
});

// const Profile = mongoose.model.Profile||mongoose.model ('Profile', CreateProfileSchema);
const Profile = mongoose.models.Profile || mongoose.model('Profile', CreateProfileSchema);
export default Profile;