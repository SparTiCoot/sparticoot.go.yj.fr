import React, { useEffect, useRef } from "react";
import styles from "./Section3.module.css";
import anime from "animejs";
import { GraduateSvg } from "../components/graduateSvg";
import certificate_logo from "../assets/images/Certificate_logo.png";
import graduate_logo from "../assets/images/Graduate_logo.png";
import sopraSteria_logo from "../assets/images/SopraSteria_logo.png";
import ratp_logo from "../assets/images/Ratp_logo.png";

const Section3 = () => {
  const internshipPathRef = useRef(null);

  const getCenterCoordinates = (element) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    console.log("left, top, width, height:", { left, top, width, height });
    return { centerX: left + width / 2, centerY: top + height / 2 };
  };

  const positionElement = (element, left, top) => {
    if (element) {
      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
      element.style.transform = "translate(50%, 50%)";
    }
  };

  useEffect(() => {
    console.log("Effect ran"); // Vérifie si l'effet s'exécute
    const internshipPath_1 = document.querySelector("#internship-1 path");
    const { centerX, centerY } = getCenterCoordinates(internshipPath_1);
    console.log(`Center Coordinates internshipPath_1: ${centerX}, ${centerY}`);
    const sopraSteria_class = document.querySelector(
      `.${styles["sopraSteria"]}`
    );
    const { centerXLogo, centerYLogo } =
      getCenterCoordinates(sopraSteria_class);
    console.log(
      `Center Coordinates sopraSteria_class: ${centerXLogo}, ${centerYLogo}`
    );
    positionElement(sopraSteria_class, centerX -130, centerY -95);
  }, []);

  return (
    <div className={styles["section"]}>
      <section className={styles["presentation"]}>
        <div className={styles["graduate-display"]}>
          <GraduateSvg />
          {/* <img id="certificate" src={certificate_logo} alt="" /> */}
          {/* <img id="graduate" src={graduate_logo} alt="" /> */}
          <div className={styles["sopraSteria"]}
            style={{ border: "5px solid red" }}
          >
            <img src={sopraSteria_logo} alt="" />
          </div>

          {/* <img id="ratp" src={ratp_logo} alt="" /> */}
        </div>
      </section>
    </div>
  );
};

export default Section3;
