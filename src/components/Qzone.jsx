import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-[#F3F3F3] mt-5 p-4 space-y-4">
      <h2 className="text-xl font-semibold text-[#403F3F] mb-4">QZone</h2>
      <img src={swimming} alt="swimming" />
      <img src={classImg} alt="classImg" />
      <img src={playGround} alt="playground" />
    </div>
  );
};

export default Qzone;
