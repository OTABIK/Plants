import { useBurger } from "../store/useBurger";
import s from "./Burger.module.css";
import { Link } from "react-router-dom";

const Burger = () => {
  const { isBurger, handleBurger } = useBurger();
  return (
    <div
      className={`${s.burger} ${isBurger && s.active}`}
      onClick={handleBurger}
    >
      <div className={s.links} onClick={(e) => e.stopPropagation()}>
        <img
          className={s.icon}
          src="/icons8-x-24.png"
          alt="close"
          onClick={handleBurger}
        />

        <Link className={s.link} to={"/"}>
          Home
        </Link>
        <Link className={s.link} to={"/PlantsType"}>
          Plants Type
        </Link>
        <Link className={s.link} to={"/More"}>
          More
        </Link>
      </div>
    </div>
  );
};

export default Burger;
