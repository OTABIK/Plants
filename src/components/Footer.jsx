import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import { toast } from "react-toastify/unstyled";

const Footer = () => {
  const notify = () => toast("Your Plant was kept");

  return (
    <footer>
      <div className={s.container}>
        <div className={s.blockOne}>
          <div className={s.box_1}>
            <Link className={s.logo} to={"/"}>
              <p className={s.pLogo}>🪴</p>
              <p className={s.planto}>Planto</p>
            </Link>
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={s.box_2}>
            <h2 className={s.title}>Quick Link’s</h2>

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
            </div>
          </div>
          <div className={s.box_3}>
            <h2 className={s.title}>For Every Update.</h2>

            <form className={s.email}>
              <input className={s.inp} placeholder="Enter Email" type="email" />
              <button type="submit" className={s.button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className={s.blockTwo}>
          <a className={s.link} href="https://www.youtube.com/" target="_blank">
            FB
          </a>
          <a className={s.link} href="https://www.youtube.com/" target="_blank">
            TW
          </a>
          <a className={s.link} href="https://www.youtube.com/" target="_blank">
            LI
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
