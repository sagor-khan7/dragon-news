import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F]">All Category</h2>
      <div className="flex flex-col gap-4 mt-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            key={category.category_id}
            className={({ isActive }) =>
              `btn text-xl font-medium border-none ${
                isActive
                  ? "bg-[#E7E7E7] text-[#403F3F] font-semibold"
                  : "text-[#9F9F9F] bg-white"
              }`
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
