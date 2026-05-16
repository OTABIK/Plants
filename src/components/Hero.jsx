import s from "./Hero.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { create } from "zustand";
import React, { useRef, useState } from "react";
import SliderPlant from "./SliderPlant";
import TrendyPlants from "./TrendyPlants";
import { ToastContainer } from "react-toastify";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.blockOne}>
          <div className={s.box1}>
            <h2 className={s.title}>Breath Natureal </h2>
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={s.btns}>
              <button className={s.btn}>Explore</button>
              <a
                className={s.playBtn}
                target="_blank"
                href="https://youtu.be/5Obh7x6J4Lg"
              >
                <img className={s.imgBtn} src="/Polygon 2.svg" alt="Polygon" />
                <p className={s.liveDemo}>Live Demo...</p>
              </a>
            </div>
          </div>
          <div className={s.box2}>
            <div className={s.trash}>
              <img src="/unsplash_3TLl_97HNJo.svg" alt="hero" />
              <div className={s.profName}>
                <h2 className={s.name}>alena Patel</h2>
                <img src="/Group 7.svg" alt="stars" />
              </div>
            </div>

            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt...
            </p>
          </div>
        </div>
        <div className={s.blockTwe}>
          <SliderPlant />
        </div>
      </div>{" "}
      <div className={s.blockThree}>
        <TrendyPlants />
      </div>
    </section>
  );
};

export default Hero;
