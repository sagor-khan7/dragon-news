import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>Category news</h2>
    </div>
  );
};

export default CategoryNews;
