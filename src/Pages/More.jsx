import Customers from "../components/Customers";
import Nav from "../components/Nav";
import TopSelling from "../components/TopSelling";
import s from "./More.module.css";

const More = () => {
  return (
    <div className={s.more}>
      <Nav />
      <TopSelling />
      <Customers />
    </div>
  );
};

export default More;
