import {Router} from "express"
import { AddProfile, GetProfiles } from "../Controller/profile.controller.js"
import { profileImage } from "../Middleware/multer.js"
const profileRouter =Router()

profileRouter.post("/add", profileImage.single("Profileimg"),AddProfile)
profileRouter.get("/get",GetProfiles)



export { profileRouter}
