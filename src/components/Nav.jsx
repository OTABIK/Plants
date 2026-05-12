import { Link } from "react-router-dom";
import s from "./Nav.module.css";
import { useBurger } from "../store/useBurger";

const Nav = () => {
  const { handleBurger } = useBurger();

  return (
    <section className={s.nav} to={"/"}>
      <div className={s.container}>
        <Link className={s.logo} to={"/"}>
          <p className={s.pLogo}>🪴</p>
          <p className={s.planto}>Planto</p>
        </Link>

        <div className={s.links}>
          <Link className={s.link} to={"/"}>
            Home
          </Link>
          <Link className={s.link} to={"/PlantsType"}>
            Plants Type
          </Link>
          <Link className={s.link} to={"/More"}>
            More
          </Link>
          {/* <Link className={s.link} to={"/Contact"}>
            Contact
          </Link> */}
        </div>
        <div className={s.more}>
          <Link className={s.icons} to={"/"}>
            <img src="/public/search-interface-symbol 1.svg" alt="search" />
          </Link>
          <Link className={s.icons} to={"/Contact"}>
            <img src="/public/bag 1.svg" alt="search" />
          </Link>
          <img
            className={s.icons}
            src="/public/Group 3.svg"
            alt="menu"
            onClick={handleBurger}
          />
        </div>
      </div>
    </section>
  );
};

export default Nav;
