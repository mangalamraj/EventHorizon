import express from "express";
import { userSignup } from "../controller/user-controller";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login");

export default router;
