import { toast } from "react-toastify";
import s from "./TrendyPlants.module.css";

const TrendyPlants = () => {
  const notify = () => toast("Your Plant was kept");

  return (
    <section className={s.trendyPlants}>
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
          <h3 className={s.overTitle}>Our Trendy plants</h3>
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

        <div className={s.plantBlockOne}>
          <img
            className={s.img}
            src="/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png"
            alt="Rose"
          />
          <div className={s.infBox}>
            <h2 className={s.title}>For Small Decs Ai Plat</h2>

            <p className={s.infBlock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <h2 className={s.cost}>Rs. 599/-</h2>

            <div className={s.btns}>
              <button className={s.btn}>Explore</button>
              <button
                onClick={notify}
                type="submit"
                //  onClick={() => alert("you keep this plant!")}
                className={s.btn}
              >
                <img src="/bag 1.svg" alt="bag" />
              </button>
            </div>
          </div>
        </div>

        <div className={s.plantBlockTwo}>
          <img
            className={s.img}
            src="/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png"
            alt="Rose"
          />
          <div className={s.infBox}>
            <h2 className={s.title}>For Small Decs Ai Plat</h2>

            <p className={s.infBlock}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <h2 className={s.cost}>Rs. 599/-</h2>

            <div className={s.btns}>
              <button className={s.btn}>Explore</button>
              <button
                onClick={notify}
                type="submit"
                //  onClick={() => alert("you keep this plant!")}
                className={s.btn}
              >
                <img src="/bag 1.svg" alt="bag" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendyPlants;
