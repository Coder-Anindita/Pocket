import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import signup from "../controllers/signup/signup.controller.js";
import login from "../controllers/login/login.controller.js";
import logout from "../controllers/logout/logout.controller.js";
import protectedFunction from "../middleware/protected.middleware.js";
const router = express.Router();

router.post(
  "/signup",
  upload.single("profileImage"),
  signup
);
router.post("/login",login)
router.post("/logout",protectedFunction,logout)
export default router;
