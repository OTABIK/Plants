import s from "./SliderPlant.module.css";
// import { Navigation } from "swiper/modules";
import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "swiper";
// import { SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { useRef } from "react";

// import { useRef } from "react";
// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

const plantCard = [
  {
    id: 1,
    image: "/public/Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png",
    title: "Trendy House Plant",
    text: "Calathea plant",
    button: "Buy Now",
  },
  // {
  //   id: 2,
  //   image: "/public/Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png",
  //   title: "Trendy House Plant",
  //   text: "Calathea plant",
  //   button: "Buy Now",
  // },

  // {
  //   id: 3,
  //   image: "/public/Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png",
  //   title: "Trendy House Plant",
  //   text: "Calathea plant",
  //   button: "Buy Now",
  // },
];

const SliderPlant = () => {
  const swiperRef = useRef(null);

  return (
    <div className={s.mySwiper}>
      {/* {plantCard.map((card) => ())} */}
      <div className={s.swiperSlide}>
        <div className={s.plantCard}>
          <img
            className={s.img}
            src="/public/Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png"
            alt="plant"
          />
          <div className={s.infCard}>
            <div className={s.infPart}>
              <p className={s.text}>Trendy House Plant</p>
              <h2 className={s.title}>Calathea plant</h2>
              <button className={s.btn}>Buy Now</button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>

    // <Swiper navigation={true} modules={[Navigation]} className={s.mySwiper}>
    //   {plantCard.map((card) => (
    //     <SwiperSlide className={s.swiperSlide}>
    //       <div className={s.plantCard}>
    //         <img
    //           src="/public/Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png"
    //           alt="plant"
    //         />
    //         <div className={s.infCard}>
    //           <div className={s.infPart}>
    //             <p className={s.text}>{card.title}</p>
    //             <h2 className={s.title}>{card.text}</h2>
    //             <button className={s.btn}>{card.button}</button>
    //           </div>
    //           {/* <img
    //             className={s.arrow}
    //             src="/public/right-arrow 1.svg"
    //             alt="right-arrow"
    //           /> */}
    //         </div>
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
};

export default SliderPlant;
