import SearchFilter from "../../Components/Filters/Filter";
import SearchInput from "../../Components/Filters/Input";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Card, Identify, ProductList } from "./style";
import BannerMobile from "../../Assets/bannerMobile.png";

const PharmaProducts = () => {

  return (
    <>
      <Header />
      <Identify>
        <img
          className="imgPharma"
          alt="imagem da farmácia"
          src={BannerMobile}
        />
        <h3 className="namePharma">Farmácia do Dito</h3>
      </Identify>
      <SearchFilter />
      <SearchInput />

      <ProductList>
          <Card>
            <img className="productImg" alt="imgProduto" src={BannerMobile} />
            <p className="productName">Paracetamol 1mg</p>
            <span className="productPrice">R$ 7,99</span>
            <button className="adcCart">Adicionar</button>
          </Card>
      </ProductList>

      <Footer />
    </>
  );
};

export default PharmaProducts;
