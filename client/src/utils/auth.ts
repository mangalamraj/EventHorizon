import { DataContext } from "@/context/userDataProvider";
import { useContext } from "react";

const AuthStatus = () => {
  const { account } = useContext(DataContext);
  const isAuthenticated = !!account;
  return isAuthenticated;
};

export default AuthStatus;
