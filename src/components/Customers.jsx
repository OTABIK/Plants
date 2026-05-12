import s from "./Customers.module.css";

const Customers = () => {
  const ProfInfo = [
    {
      id: 1,
      logo: "/public/unsplash_3TLl_97HNJo.svg",
      name: "Maxn Raval",
      stars: "/public/Group 7.svg",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 2,
      logo: "/public/unsplash_3TLl_97HNJo.svg",
      name: "venely k",
      stars: "/public/Group 7.svg",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 3,
      logo: "/public/unsplash_3TLl_97HNJo.svg",
      name: "Lii thakur",
      stars: "/public/Group 7.svg",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ];

  return (
    <section className={s.customers}>
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
          <h3 className={s.subTitle}>Customer Review</h3>
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

        <div className={s.mainCard}>
          {ProfInfo.map((card) => (
            <div key={card.id} className={s.cardBox}>
              <div className={s.infoBox}>
                <div className={s.blockOne}>
                  <img className={s.img} src={card.logo} alt="logo" />
                  <div className={s.blockTwo}>
                    <h2 className={s.useName}>{card.name}</h2>
                    <img className={s.mark} src={card.stars} alt="stars_Mark" />
                  </div>
                </div>
                <p className={s.text}>{card.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
