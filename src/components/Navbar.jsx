import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
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
          <img src={userIcon} alt="user profile icon" />
        </div>
        <button className="btn rounded-none bg-[#403F3F] text-white font-semibold text-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
