import React, { useEffect } from "react";
import anime from "animejs";
import styles from "./Section1.module.css";
import footerCubes from "../assets/images/footerCubes.svg";

const Section1 = () => {
  const Cube2DSvg = [
    {
      id: 1,
      svg: (
        <svg
          className={styles["animated-left-cubes-group"]}
          viewBox="0 0 365 294"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="20vw"
        >
          <g className={styles["animated-white-cube"]}>
            <path
              d="M119.326 119.169L200.326 72.1694L282 119L200.326 166.169L119.326 119.169Z"
              fill="#E9E9E9"
            />
            <path
              d="M282.325 166.169L200.326 213.169L200.326 166.169L282 119L282.325 166.169Z"
              fill="white"
            />
            <path
              d="M119.326 167.169L200.326 213.169L200.326 166.169L118.991 119L119.326 167.169Z"
              fill="#DFDFDF"
            />
          </g>
          <g className={styles["animated-red-cube"]}>
            <path
              d="M282 119L363 167L323 189.5L244 141L282 119Z"
              fill="#972326"
            />
            <path
              d="M323.001 236L323 189.5L363.001 167L363.001 214L323.001 236Z"
              fill="#BD2A2E"
            />
          </g>
          <path
            d="M323 236L244.001 188.5L244 141L323 189.5L323 236Z"
            fill="#711B1D"
          />
          <g className={styles["animated-beige-cube"]}>
            <path
              d="M75.0215 189.894L116.771 213.055L116.771 260.385L75.0214 237.223L75.0215 189.894Z"
              fill="#B09778"
            />
            <path
              d="M200.27 213.055L116.768 260.386L116.768 213.056L200.27 165.725L200.27 213.055Z"
              fill="#F2D0A7"
            />
            <path
              d="M158.52 141.557L75.0217 189.894L116.771 213.055L200.269 165.725L158.52 141.557Z"
              fill="#D9BA94"
            />
          </g>
          <g className={styles["animated-blue-cube"]}>
            <path
              d="M81.9053 47.3828L162.091 0.385232L244.009 47.1476L161.905 94.3828L81.9053 47.3828Z"
              fill="#13124A"
            />
            <path
              d="M161.905 94.3828L244.009 47.1476L244 142L162.405 189.383L161.905 94.3828Z"
              fill="#171559"
            />
            <path
              d="M161.905 94.3828L81.9053 47.3828L81 142.148L162.405 189.383L161.905 94.3828Z"
              fill="#0D0C35"
            />
          </g>
          <g className={styles["animated-orange-cube-1"]}>
            <path
              d="M42.1388 163.275L80.9999 142L124 167L82.8005 186.999L42.1388 163.275Z"
              fill="#F35F40"
            />
            <path
              d="M82.6388 281L82.6388 187L124 167L124.138 257L82.6388 281Z"
              fill="#FF8066"
            />
            <path
              d="M82.6381 280.964L83.0003 187L42.1382 163L42.1383 258L82.6381 280.964Z"
              fill="#FF6444"
            />
          </g>
        </svg>
      ),
      title: "Icone 1",
      description: "Image cubes bleu, rouge, blanc, beige, orange.",
    },
    {
      id: 2,
      svg: (
        <svg
          className={styles["animated-right-cubes-group"]}
          width="25vw"
          viewBox="0 0 492 423"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className={styles["animated-pink-cube"]}>
            <path d="M82 139L245 233L164 281L0 186L82 139Z" fill="#BF395C" />
            <path d="M0 186L164 281V375L0 281V186Z" fill="#D94169" />
            <path d="M164 281L245 233V328L164 375V281Z" fill="#A02E4C" />
          </g>
          <g className={styles["animated-black-cube"]}>
            <path
              d="M491.731 95.6688L409.731 48.6688L327 95.4116L408.73 143.669L491.731 95.6688Z"
              fill="#474143"
            />
            <path
              d="M408.731 328.669L408.731 143.669L327 95.4116L328 283.912L408.731 328.669Z"
              fill="#555555"
            />
            <path
              d="M408.731 328.669L408.731 143.669L491.731 95.6688L491.731 284.669L408.731 328.669Z"
              fill="#413B3D"
            />
          </g>
          <g className={styles["animated-yellow-cube"]}>
            <path
              d="M327 187L164 281L245 329L409 234L327 187Z"
              fill="#FFC636"
            />
            <path d="M409 234L245 329V423L409 329V234Z" fill="#FFCF57" />
            <path d="M245 329L164 281V376L245 423V329Z" fill="#F2BC31" />
          </g>
          <g className={styles["animated-orange-cube-2"]}>
            <path
              d="M243.983 51.7897L326.984 0.532592L411.125 48.0325L326.984 99.7897L243.983 51.7897Z"
              fill="#F35F40"
            />
            <path
              d="M326.983 284.79L326.983 99.7898L411.124 48.0326L408.983 237.79L326.983 284.79Z"
              fill="#FF8066"
            />
            <path
              d="M326.983 284.79L326.983 99.7898L243.983 51.7898L243.983 240.79L326.983 284.79Z"
              fill="#FF6444"
            />
          </g>
        </svg>
      ),
      title: "Icone 2",
      description: "Image cubes rose, jaune, orange, noir.",
    },
  ];

  useEffect(() => {
    anime({
      targets: `.${styles["vincent-character"]}`,
      translateY: [-10, 10], // Flottement
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      duration: 2000,
    });

    anime({
      targets: `.${styles["animated-white-cube"]} path`,
      translateY: [-20, 0],
      direction: "alternate",
      easing: "easeInOutQuad",
      loop: true,
      duration: 2000,
    });

    anime({
      targets: `.${styles["animated-pink-cube"]} path`,
      translateY: [-20, 0],
      direction: "alternate",
      easing: "easeInOutQuad",
      loop: true,
      duration: 2000,
    });
  }, []);

  return (
    <div className={styles["section"]}>
      <section className={`${styles.presentation} ${styles.container}`}>
        <div className={styles["text-item"]}>
          <h1 className={styles["title-1"]}>
            <span className={styles["word-1"]}>Hello</span>{" "}
            <span className={styles["word-2"]}>there !</span>
          </h1>
          <h1 className={styles["title-2"]}>
            <span className={styles["word-2"]}>I'm</span>{" "}
            <span className={styles["word-1"]}>Vincent VILFEU</span>
          </h1>
        </div>
        <div className={styles["icon-item"]}>
          {Cube2DSvg.map((icon) => (
            <div key={icon.id} className={styles["icon-item"]}>
              {icon.svg}
            </div>
          ))}
        </div>
        <div className={styles["img-item"]}>
          <img
            className={styles["vincent-character"]}
            src="src\assets\images\VincentCharacter.png"
            alt="Vincent VILFEU character"
          />
        </div>{" "}
        <div className={styles["text-item"]}>
          <h2>
            Developer
            <br /> Junior
          </h2>
        </div>
      </section>
      <section className={`${styles.footer} ${styles.container}`}>
        <div className={styles["footerheader-container"]}>
          <img src={footerCubes} alt="footer cubes" />
        </div>
      </section>
    </div>
  );
};

export default Section1;
