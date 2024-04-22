import User from "../model/user-schema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { verifyToken } from "../middleware/verifyToken";

const JWT_SECRET = "mango";

export const userSignup = async (request: any, response: any) => {
  try {
    const { name, username, password } = request.body;
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const newUser = new User({ name, username, password: hashedPassword });
    const savedUser = await newUser.save();

    response
      .status(200)
      .json({ name: savedUser.name, username: savedUser.username });
  } catch (error: any) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request: any, response: any) => {
  try {
    const { username, password } = request.body;
    const user = await User.findOne({ username });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = jwt.sign(
          { userId: user._id, userEmail: user.username },
          JWT_SECRET,
          {
            expiresIn: "1h",
          },
        );
        response.status(200).json({ token });
      } else {
        response.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      response.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error: any) {
    response.status(500).json({ message: error.message });
  }
};

export const getUserProfile = async (request: any, response: any) => {
  try {
    const userData = request.user;
    console.log(userData);
    return response.status(200).json({ msg: userData });
  } catch (error: any) {
    response.status(500).json({ message: error.message });
  }
};
