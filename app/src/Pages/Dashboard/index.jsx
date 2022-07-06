import CardsDashboard from "../../Components/Dashboard/Cards-dashboard";

import Header from "../../Components/Header";
import { SectionBox } from "./style";

import ModalAdd from "../../Components/Dashboard/Modals/Add";
import SearchInput from "../../Components/Filters/Input";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SearchInput />
      <SectionBox>
        <ModalAdd />
      </SectionBox>
      <CardsDashboard />
    </>
  );
};

export default Dashboard;
