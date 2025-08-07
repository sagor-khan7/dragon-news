import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-10">
      <div>
        <img className="md:max-w-md max-w-80" src={logo} alt="logo image" />
      </div>
      <h2 className="text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-xl font-medium text-[#706F6F]">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
