import BannerArea from "../../Components/Banner";
import SearchFilter from "../../Components/Filters/Filter";
import SearchInput from "../../Components/Filters/Input";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Cart from "../../Components/Home/Cart";
import ProductMain from "../../Components/Product-main";
import ProductSection from "../../Components/Product-section";

const Home = () => {
  return (
    <div>
      <Cart />
      <Header />
      <BannerArea />
      <section>
        <SearchFilter />
      </section>
      <SearchInput />
      <ProductMain />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Home;
