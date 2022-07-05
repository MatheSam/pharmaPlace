import ModalAdd from "../../Components/Dashboard/Modals/Add";
import ModalDelete from "../../Components/Dashboard/Modals/Delete";
import ModalEdit from "../../Components/Dashboard/Modals/Edit";

const Dashboard = () => {
  return (
    <>
      <ModalEdit />
      <ModalAdd />
      <ModalDelete />
    </>
  );
};

export default Dashboard;
