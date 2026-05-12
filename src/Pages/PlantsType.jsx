import Nav from "../components/Nav";
import OurBest from "../components/OurBest";
import s from "./PlantsType.module.css";

import React from "react";

const PlantsType = () => {
  return (
    <div className={s.plantsType}>
      <Nav />
      <OurBest />
    </div>
  );
};

export default PlantsType;
