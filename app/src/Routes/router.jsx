import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PharmaProducts from "../Pages/Pharma-products";
import PharmasPage from "../Pages/Pharmas-page";
import RegisterSeller from "../Pages/Register-seller";
import RegisterUser from "../Pages/Register-user";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pharmaProducts" element={<PharmaProducts />} />
      <Route path="/pharmas" element={<PharmasPage />} />
      <Route path="/registerSeller" element={<RegisterSeller />} />
      <Route path="/registerUser" element={<RegisterUser />} />
    </Routes>
  );
};

export default Rotas;
