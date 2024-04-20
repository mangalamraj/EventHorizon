import express from "express";
import {
  getUserProfile,
  userLogin,
  userSignup,
} from "../controller/user-controller";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.post("/getUser", getUserProfile);
export default router;
