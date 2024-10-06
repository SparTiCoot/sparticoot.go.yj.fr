import React, { useEffect } from "react";
import anime from "animejs";
import styles from "./Section1.module.css";
import { FooterCubesSvg } from "../components/footerCubesSvg";
import { FiveColorFulCubesSvg } from "../components/fiveColorFulCubesSvg";
import { FourColorFulCubesSvg } from "../components/fourColorFulCubesSvg";

const Section1 = () => {
  useEffect(() => {
    anime({
      targets: `.${styles["vincent-character"]}`,
      translateY: ["-5vh"],
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      duration: 1500,
    });

    anime({
      targets: "#animated-white-cube",
      translateY: [-50, -50, 0],
      direction: "alternate",
      easing: "easeInOutQuad",
      loop: true,
      duration: 3000,
    });

    anime({
      targets: "#animated-red-cube",
      translateY: [100, 0],
      direction: "alternate",
      easing: "easeInOutQuad",
      loop: true,
      duration: 2000,
      transformOrigin: "center center",
    });

    anime({
      targets: "#animated-beige-cube",
      translateX: [50, 0],
      translateY: [30, -20],
      direction: "alternate",
      easing: "easeInOutQuad",
      loop: true,
      duration: 2000,
    });

    anime({
      targets: "#animated-pink-cube",
      translateY: [-250, 0],
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
          <h1
            className={`${styles["title-1"]} ${styles["title-presentation"]}`}
          >
            <span className={styles["word-1"]}>Hello</span>{" "}
            <span className={styles["word-2"]}>there !</span>
          </h1>
          <h1
            className={`${styles["title-2"]} ${styles["title-presentation"]}`}
          >
            <span className={styles["word-2"]}>I'm</span>{" "}
            <span className={styles["word-1"]}>Vincent VILFEU</span>
          </h1>
        </div>
        <div className={styles["icon-item"]}>
          <div className={styles["animated-left-cubes-group"]}>
            <FiveColorFulCubesSvg />
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
            <FourColorFulCubesSvg />
          </div>
        </div>
        <div className={styles["text-item"]}>
          <h1 className={styles["title-dev-junior"]}>
            Developer
            <br /> Junior
          </h1>
        </div>
        <div className={styles["footer"]}>
          <FooterCubesSvg />
        </div>
      </section>
    </div>
  );
};

export default Section1;
