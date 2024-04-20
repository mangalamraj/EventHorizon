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
    const username = request.body.username;
    const password = request.body.password;

    // Find the user by username
    let user = await User.findOne({ username });

    if (user) {
      // Compare the hashed password in the database with the provided password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
          expiresIn: "1h",
        });

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

export const getUserProfile = async (
  request: any,
  response: any,
  next: any,
) => {
  try {
    // Call verifyToken with all three arguments
    verifyToken(request, response, () => {
      const userId = request.user.userId;
      User.findById(userId, (err: any, user: any) => {
        if (err) {
          return response.status(500).json({ message: err.message });
        }
        if (user) {
          response.status(200).json({
            name: user.name,
            username: user.username,
          });
        } else {
          response.status(404).json({ message: "User not found" });
        }
      });
    });
  } catch (error: any) {
    response.status(500).json({ message: error.message });
  }
};
