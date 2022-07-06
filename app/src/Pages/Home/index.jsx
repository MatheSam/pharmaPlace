import BannerArea from "../../Components/Banner";
import SearchFilter from "../../Components/Filters/Filter";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerArea />
      <section>
        <SearchFilter />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
