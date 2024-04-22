import express from "express";
import {
  getUserProfile,
  userLogin,
  userSignup,
} from "../controller/user-controller";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/getuser", verifyToken, getUserProfile);
export default router;
