import s from "./Card02.module.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";

const Card02 = () => {
  const BestBuys = [
    {
      id: 1,
      image:
        "/Rose ыгзуксге Gold Feminine Calligraphy Monogram Logo(15) 4-cropped.svg",
      tittle: "We Have Small And Best O2 Plants Collection’s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      extra:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      image: "/Rose Gold Feminine Calligraphy Monogram Logo(15) 3-cropped.svg",
      tittle: "We Have Small And Best O2 Plants Collection’s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      extra:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      image:
        "/Rose cut Gold Feminine Calligraphy Monogram Logo(15) 2-cropped.svg",
      tittle: "We Have Small And Best O2 Plants Collection’s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      extra:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 4,
      image:
        "/Rose crot Gold Feminine Calligraphy Monogram Logo(20) 2-cropped.svg",
      tittle: "We Have Small And Best O2 Plants Collection’s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      extra:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <section className={s.card02}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        className={s.mySwiper}
        modules={[Autoplay]}
      >
        {BestBuys.map((card) => (
          <SwiperSlide key={card.id} className={s.bestCard}>
            <div className={s.cardBox}>
              <img className={s.img} src={card.image} alt="Best_Plant" />
              <div className={s.blockOne}>
                <h2 className={s.title}>{card.tittle}</h2>
                <p className={s.text}>{card.text}</p>
                <p className={s.text}>{card.extra}</p>
                <div className={s.blockTwo}>
                  <button className={s.btn}>Explore</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button className={s.arrowBox}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={s.arrow}
          >
            <img src="/right-arrow 3.svg" alt="left" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={s.arrow}
          >
            <img src="/right-arrow 2.svg" alt="right" />
          </button>
        </button>
      </Swiper>
    </section>
  );
};

export default Card02;
