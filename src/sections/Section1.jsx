import React, { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./SectionTest.module.css";
import { PolygonsSvg } from "../components/polygonsSvg";
import vincent_character from "../assets/images/VincentCharacter.png";

const Section1 = () => {
  useEffect(() => {
    anime({
      targets: `.${styles["vincent-character"]}`,
      translateY: [
        { value: -50, duration: 1500, easing: "easeInOutSine" },
        { value: 40, duration: 1500, easing: "easeInOutSine" },
      ],
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <div className={styles["section"]}>
      <div className={styles["top-greeting"]}>
        Permettez-moi de me présenter, VILFEU Vincent.
      </div>
      <section className={styles["presentation"]}>

        <div className={styles["left-container"]}>
          <h1 className={`${styles["title-presentation"]}`}>
            Bienvenue.</h1>
          <p className={styles["description-presentation"]}>
            Développeur web junior spécialisé en PHP et Symfony, je conçois des applications
            web structurées et maintenables, en appliquant les bonnes pratiques de développement.
          </p>
          <p className={styles["description-presentation"]}>
            Je développe également des applications mobiles en Kotlin et Java, afin de proposer
            des solutions complètes orientées utilisateur. À travers des projets concrets,
            je renforce mes compétences techniques dans l’objectif d’intégrer une équipe en CDI.
          </p>
        </div>

        <div className={styles["right-container"]}>
          <div className={styles["img-item"]}>
            <img
              className={styles["vincent-character"]}
              src={vincent_character}
              alt="Vincent VILFEU character"
            />
          </div>
        </div>
      </section>
      <footer className={styles["footer"]}>
        Disponible pour un premier CDI – Développeur web & mobile
      </footer>
      <div className={styles["background-polygons"]}>
        <PolygonsSvg />
      </div>
    </div>
  );
};

export default Section1;
