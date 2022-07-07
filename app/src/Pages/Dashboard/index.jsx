import CardsDashboard from "../../Components/Dashboard/Cards-dashboard";

import Header from "../../Components/Header";
import { SectionBox } from "./style";

import ModalAdd from "../../Components/Dashboard/Modals/Add";
import SearchInput from "../../Components/Filters/Input";
import Footer from "../../Components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Header />

      <SearchInput />
      <SectionBox>
        <ModalAdd />
      </SectionBox>
      <CardsDashboard />

      <Footer />
    </div>
  );
};

export default Dashboard;
