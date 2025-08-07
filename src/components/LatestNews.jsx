import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-[#F3F3F3] p-4">
      <p className="text-xl text-white font-medium bg-[#D72050] py-2 px-6">
        Latest
      </p>
      <Marquee
        pauseOnHover={true}
        className="space-x-4 text-lg font-semibold text-[#403F3F]"
      >
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          minima eligendi voluptate? Placeat ab nisi neque eveniet tempore
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          minima eligendi voluptate? Placeat ab nisi neque eveniet tempore
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          minima eligendi voluptate? Placeat ab nisi neque eveniet tempore
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
