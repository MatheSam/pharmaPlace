import CardsPharma from "../../Components/Cards-pharms";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Container } from "./style";

const PharmasPage = () => {
  return (
    <Container>
      <Header />
      <div>
        <h1>FARMÁCIAS PARCEIRAS</h1>
      </div>
      <CardsPharma />
      <Footer />
    </Container>
  );
};

export default PharmasPage;
