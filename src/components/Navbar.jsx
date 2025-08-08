import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import AuthContext from "../provider/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="text-xl font-bold text-[#706F6F]">{user && <p>{user?.displayName}</p>}</div>
      <div className="space-x-5">
        <Link to="/" className="text-lg text-[#706F6F]">
          Home
        </Link>
        <Link to="/about" className="text-lg text-[#706F6F]">
          About
        </Link>
        <Link to="/career" className="text-lg text-[#706F6F]">
          Career
        </Link>
      </div>
      <div className="flex space-x-3 items-center">
        <div>
          {user ? (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user?.photoURL}
              alt="user profile icon"
            />
          ) : (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={userIcon}
              alt="user profile icon"
            />
          )}
        </div>
        {user ? (
          <Link
            onClick={signOutUser}
            className="btn rounded-none bg-[#403F3F] text-white font-semibold text-xl"
          >
            Log out
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="btn rounded-none bg-[#403F3F] text-white font-semibold text-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
