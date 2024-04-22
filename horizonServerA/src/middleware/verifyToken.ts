import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../model/user-schema";
const JWT_SECRET = "mango";

export const verifyToken = async (request: any, response: any, next: any) => {
  const authorizationHeader = request.header("Authorization"); // Lowercase "authorization"
  console.log("yooooo", authorizationHeader);
  if (!authorizationHeader) {
    return response.status(403).json({ message: "Token is not provided" });
  }
  const token = authorizationHeader.replace("Bearer", "").trim();
  // Extract token from the "Bearer TOKEN" format
  console.log("hiiiii", token);
  try {
    const isVerified: JwtPayload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    console.log("yoooo", isVerified);
    const userData = await User.findOne({
      username: isVerified.userEmail,
    }).select({
      password: 0,
    });
    request.user = userData;
    request.token = token;
    request.userID = userData!._id;
    next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid token" });
  }
};
