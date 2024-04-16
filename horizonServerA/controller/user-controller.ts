import User from "../model/user-schena";

export const userSignup = async (request: any, response: any) => {
  try {
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: user });
  } catch (error: any) {
    response.status(500).json({ message: error.message });
  }
};
