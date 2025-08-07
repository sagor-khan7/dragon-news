import facebook from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-[#403F3F]">Find Us On</h2>
      <div className="join flex join-vertical mt-5 *:bg-white text-[#706F6F]">
        <button className="btn join-item justify-start">
          <img src={facebook} alt="facebook" />
          <p className="font-medium text-[#706F6F] ml-5">Facebook</p>
        </button>
        <button className="btn join-item justify-start">
          <img src={twitter} alt="twitter" />
          <p className="font-medium text-[#706F6F] ml-3">Twitter</p>
        </button>
        <button className="btn join-item justify-start">
          <img src={instagram} alt="instagram" />
          <p className="font-medium text-[#706F6F] ml-3">Instagram</p>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
