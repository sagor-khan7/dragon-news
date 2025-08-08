import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../provider/AuthContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4]">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-6">
          Login your account
        </h2>
        <div className="border-t-2 border-[#E7E7E7] mb-6"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xl text-[#403F3F] font-semibold mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-3 rounded-md bg-[#F3F3F3] outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-xl text-[#403F3F] font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-md bg-[#F3F3F3] outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#403F3F] text-white py-3 rounded-md font-semibold hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-[#706F6F]">
          Don’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-red-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
