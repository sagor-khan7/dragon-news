import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="text-xl font-semibold text-[#403F3F]">Dragon News</h2>
          <div className="border border-[#E7E7E7] p-[30px] rounded mt-4 space-y-6">
            <img className="w-full" src={news.image_url} alt="" />
            <h2 className="text-2xl font-bold text-[#403F3F] leading-[45px]">
              {news.title}
            </h2>
            <p className="text-[#706F6F] leading-6">{news.details}</p>

            <Link to={`/category/${news?.category_id}`}>
              <p className="text-xl text-white w-fit font-medium bg-[#D72050] py-2 px-6">
                All news in this category
              </p>
            </Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
