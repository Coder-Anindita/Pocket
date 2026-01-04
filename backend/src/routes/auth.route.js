import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import signup from "../controllers/signup/signup.controller.js";
const router = express.Router();

router.post(
  "/signup",
  upload.single("profileImage"),
  signup
);

export default router;
