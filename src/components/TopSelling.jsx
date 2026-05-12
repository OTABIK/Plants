import s from "./TopSelling.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { toast } from "react-toastify";

const TopSelling = () => {
  const CardSelling = [
    {
      id: 1,
      img: "/public/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png",
      title: "Calathea plant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      cost: "Rs. 359/-",
    },
    {
      id: 2,
      img: "/public/Rose aaaaGold Feminine Calligraphy Monogram Logo(15) 2 (1).png",
      title: "Calathea plant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      cost: "Rs. 359/-",
    },
    {
      id: 3,
      img: "/public//Rose Gold Feminine Calligraphy Monogram Logo(15) 1.png",
      title: "Calathea plant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      cost: "Rs. 359/-",
    },
    {
      id: 4,
      img: "/public/Rose cccGold Feminine Calligraphy Monogram Logo(15) 2.png",
      title: "Calathea plant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      cost: "Rs. 359/-",
    },
    {
      id: 5,
      img: "/public/Rose fffffGold Feminine Calligraphy Monogram Logo(15) 2 (2).png",
      title: "Calathea plant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      cost: "Rs. 359/-",
    },
    {
      id: 6,
      img: "/public/Rose zzzzzGold Feminine Calligraphy Monogram Logo(15) 2 (3).png",
      title: "Calathea plant",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      cost: "Rs. 359/-",
    },
  ];

  const swiperRef = useRef(null);

  const notify = () => toast("Your Plant was kept");

  return (
    <section className={s.topSelling}>
      <div className={s.container}>
        <div className={s.boxTitle}>
          <svg
            className={s.svg}
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 2.5L2.5 48.5C2.5 61.2026 12.7975 71.5 25.5 71.5H71"
              stroke="url(#paint0_linear_12_70)"
              stroke-width="5"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_12_70"
                x1="2"
                y1="0.499999"
                x2="71"
                y2="71.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#55B000" />
                <stop
                  offset="0.500917"
                  stop-color="white"
                  stop-opacity="0.156606"
                />
                <stop offset="1" stop-color="#50790B" />
              </linearGradient>
            </defs>
          </svg>
          <h3 className={s.subTitle}>Our Top Selling</h3>
          <svg
            className={s.svg}
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71 71.5L71 25.5C71 12.7974 60.7025 2.5 48 2.5L2.49999 2.50001"
              stroke="url(#paint0_linear_12_69)"
              stroke-width="5"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_12_69"
                x1="71.5"
                y1="73.5"
                x2="2.5"
                y2="2.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#55B000" />
                <stop
                  offset="0.500917"
                  stop-color="white"
                  stop-opacity="0.156606"
                />
                <stop offset="1" stop-color="#50790B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={s.mySwiper}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1419: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {CardSelling.map((card) => (
            <SwiperSlide key={card.id} className={s.swiperSlide}>
              <div className={s.divCard}>
                <img className={s.img} src={card.img} alt="plant" />

                <div className={s.divInf}>
                  <h2 className={s.title}>{card.title}</h2>
                  <p className={s.text}>{card.text}</p>
                  <div className={s.divCost}>
                    <h2 className={s.cost}>{card.cost}</h2>
                    <button onClick={notify} className={s.btn}>
                      <img src="/public/bag 1.svg" alt="bag" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopSelling;
