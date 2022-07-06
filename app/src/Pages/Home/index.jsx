import BannerArea from "../../Components/Banner";
import SearchFilter from "../../Components/Filters/Filter";
import SearchInput from "../../Components/Filters/Input";
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
      <SearchInput />
      <Footer />
    </div>
  );
};

export default Home;
