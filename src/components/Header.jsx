import s from "./Header.module.css";
import Hero from "./Hero";
import Nav from "./Nav";

export const Header = () => {
  return (
    <div className={s.header}>
      <Nav />
      <Hero />
    </div>
  );
};
