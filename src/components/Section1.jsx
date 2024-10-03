import React, { useEffect } from "react";
import anime from "animejs";
import styles from "./Section1.module.css";
import footerCubes from "../assets/images/footerCubes.svg";
import fiveColorFulCubes from "../assets/images/fiveColorFulCubes.svg";
import fourColorFulCubes from "../assets/images/fourColorFulCubes.svg";

const Section1 = () => {
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
      <section className={styles["presentation"]}>
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
          <div className={styles["animated-left-cubes-group"]}>
            <img src={fiveColorFulCubes} alt="five cubes" />
          </div>
        </div>
        <div className={styles["img-item"]}>
          <img
            className={styles["vincent-character"]}
            src="src\assets\images\VincentCharacter.png"
            alt="Vincent VILFEU character"
          />
        </div>
        <div className={styles["icon-item"]}>
          {" "}
          <div className={styles["animated-right-cubes-group"]}>
            <img src={fourColorFulCubes} alt="five cubes" />
          </div>
        </div>
        <div className={styles["text-item"]}>
          <h1>
            Developer
            <br /> Junior
          </h1>
        </div>
        <div className={styles["footer"]}>
          <img src={footerCubes} alt="footer cubes" />
        </div>
      </section>
     
    </div>
  );
};

export default Section1;
