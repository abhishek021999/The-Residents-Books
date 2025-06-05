import {Profile} from '../../backend/Models/Profile.model.js'
import {v2} from "cloudinary"
import fs from "fs"
  v2.config({
    cloud_name: "div73bxig",
    api_key:934178561787478,
    api_secret: "s6RYiLHbAaMlM5N2EBYByjDtIJo",
  });

// Add Profile
const AddProfile = async (req, res) => {
  const { firstName, lastName, role, linkedin, twitter } = req.body;
  try {

    let url;
    if(req.file){
       // Upload the new photo to Cloudinary if provided
              const uploadResponse = await v2.uploader.upload(req.file.path);
              url = uploadResponse.secure_url;
              fs.unlinkSync(req.file.path)
    }
console.log(url)

    const newProfile = new Profile({
      firstName,
      lastName,
      role,
      photo:url || "",
      linkedin,
      twitter
    });

    await newProfile.save();
    res.status(201).json({ message: "Profile added successfully" });

  } catch (error) {
    res.status(400).json({ message: "Error occurred while adding profile", error });
  }
};

// Get All Profiles
const GetProfiles = async (req, res) => {
  try {
    const allProfiles = await Profile.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "All profiles", allProfiles });
  } catch (error) {
    res.status(400).json({ message: "Error occurred while fetching profiles", error });
    console.log("Error fetching profiles:", error);
  }
};

export { AddProfile, GetProfiles };






