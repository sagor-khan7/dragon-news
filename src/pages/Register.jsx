import { useContext } from "react";
import AuthContext from "../provider/AuthContext";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    const terms = e.target.terms.checked;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4]">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-6">
          Register your account
        </h2>
        <div className="border-t-2 border-[#E7E7E7] mb-6"></div>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-[#403F3F] font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-[#F3F3F3] outline-none"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-[#403F3F] font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full p-3 rounded-md bg-[#F3F3F3] outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[#403F3F] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-3 rounded-md bg-[#F3F3F3] outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-[#403F3F] font-semibold mb-1">
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

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="checkbox checkbox-sm"
            />
            <label htmlFor="terms" className="text-sm text-[#706F6F]">
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-md font-semibold text-white bg-[#403F3F] hover:bg-gray-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
