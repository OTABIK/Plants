import Card02 from "./Card02";
import s from "./OurBest.module.css";

const ourBest = () => {
  return (
    <section className={s.ourBest}>
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
          <h3 className={s.subTitle}>Our Best o2</h3>
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

        <Card02 />

        <button className={s.arrowBox}>
          <button className={s.arrow}>
            <img src="/public/right-arrow 2.svg" alt="left" />
          </button>
          <button className={s.arrow}>
            <img src="/public/right-arrow 2.svg" alt="right" />
          </button>
        </button>
      </div>
    </section>
  );
};

export default ourBest;
