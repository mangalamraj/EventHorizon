"use client";
import React, { createContext, useState, useContext } from "react";

type authContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
// interface UserContextType {
//   account: boolean;
//   setAccount: React.Dispatch<boolean>;
// }

// export const UserContext = createContext<UserContextType | undefined>(
//   undefined,
// );

// export const UserProvider: React.FC = ({ children }) => {
//   const [account, setAccount] = useState<boolean>(false);

//   return (
//     <UserContext.Provider value={{ account, setAccount }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
