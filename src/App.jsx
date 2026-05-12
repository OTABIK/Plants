import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import PlantsType from "./Pages/PlantsType";
import More from "./Pages/More";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Burger from "./components/Burger";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Burger />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PlantsType" element={<PlantsType />} />
      <Route path="/More" element={<More />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <Footer />
  </>
);

export default App;
