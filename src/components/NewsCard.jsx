import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, total_view, rating } = news;

  return (
    <div className="card rounded-lg mt-5 border border-gray-200 space-y-4">
      {/* Header */}
      <div className="flex bg-[#F3F3F3] rounded-t-md items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={author.img}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#403F3F]">
              {author.name || "Unknown"}
            </h3>
            <p className="text-xs text-[#706F6F]">
              {author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-2">
        <h2 className="font-bold text-lg text-[#403F3F] leading-snug mb-2">
          {title}
        </h2>
        <img
          src={image_url}
          alt="news"
          className="w-full object-cover rounded-md mb-3"
        />
        <p className="text-[#706F6F] text-sm leading-relaxed">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
          <Link
            to={`/news/${news._id}`}
            className="text-[#FF8C47] font-medium ml-2 cursor-pointer"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-[#706F6F] text-sm">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(rating.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
