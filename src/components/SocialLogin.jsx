import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">Login With</h2>
      <div className="flex flex-col space-y-3 mt-4 *:bg-white">
        <button className="btn text-blue-500">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
