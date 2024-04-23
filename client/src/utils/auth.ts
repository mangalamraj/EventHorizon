import { DataContext } from "@/context/userDataProvider";
import { useContext } from "react";

const AuthStatus = () => {
  const { account } = useContext(DataContext);
  let isAuthenticated = false;
  if (account) {
    isAuthenticated = true;
  }

  return isAuthenticated;
};

export default AuthStatus;
