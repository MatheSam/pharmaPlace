import BannerArea from "../../Components/Banner";
import SearchFilter from "../../Components/Filters/Filter";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerArea />
      <section>
        <SearchFilter />
      </section>
    </div>
  );
};

export default Home;
