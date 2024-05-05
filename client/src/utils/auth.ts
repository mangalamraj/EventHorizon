export const checkAuthStatus = (account: any) => {
  console.log("yoyoyoy", account);
  if (account) {
    return true; // Token exists, user is authenticated
  } else if (!account) {
    return false; // Account is false, user is not authenticated
  }
  return false; // Default case, user is not authenticated
};
