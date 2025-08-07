import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link className="btn text-xl font-medium text-[#9F9F9F] border-none" key={category.category_id}>{category.category_name}</Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
