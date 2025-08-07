import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-6">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto py-5 gap-5 grid md:grid-cols-12">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">right navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
