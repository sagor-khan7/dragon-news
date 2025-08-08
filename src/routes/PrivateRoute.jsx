import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  if (user) return children;
  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoute;
