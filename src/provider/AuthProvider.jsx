import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = { name: "John Doe" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
