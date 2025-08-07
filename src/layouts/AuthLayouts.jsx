import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayouts = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <header className="py-6 w-11/12 mx-auto">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayouts;
