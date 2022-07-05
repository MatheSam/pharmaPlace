import BannerArea from "../../Components/Banner";
import SearchFilter from "../../Components/Filters/Filter";
import Header from "../../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <BannerArea />
      <section>
        <SearchFilter  />
      </section>
    </>
  );
};

export default Home;
