import jwt from "jsonwebtoken";
const JWT_SECRET = "mango";

export const verifyToken = (request: any, response: any, next: any) => {
  const authorizationHeader = request.headers["authorization"]; // Lowercase "authorization"
  if (!authorizationHeader) {
    return response.status(403).json({ message: "Token is not provided" });
  }
  const token = authorizationHeader.split(" ")[1]; // Extract token from the "Bearer TOKEN" format
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    request.user = decoded;
    next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid token" });
  }
};
