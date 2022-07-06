import CardsDashboard from "../../Components/Dashboard/Cards-dashboard";

import ModalAdd from "../../Components/Dashboard/Modals/Add";
import ModalDelete from "../../Components/Dashboard/Modals/Delete";
import ModalEdit from "../../Components/Dashboard/Modals/Edit";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <CardsDashboard />
      <ModalEdit />
      <ModalAdd />
      <ModalDelete />
    </>
  );
};

export default Dashboard;
