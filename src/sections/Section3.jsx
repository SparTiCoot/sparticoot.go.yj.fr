import React, { useEffect, useRef, useCallback } from "react";
import styles from "./Section3.module.css";
import { GraduateSvg } from "../components/graduateSvg";
import sopraSteria_logo from "../assets/images/SopraSteria_logo.png";
import ratp_logo from "../assets/images/Ratp_logo.png";
import graduate_logo from "../assets/images/Graduate_logo.png";
import certificate_logo from "../assets/images/Certificate_logo.png";

const Section3 = () => {
  const sectionRef = useRef(null);

  const getCenterCoordinates = (element, container) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const centerX = left - containerRect.left + width / 2;
    const centerY = top - containerRect.top + height / 2;
    console.log("Coordinates relative to Section 3:", { centerX, centerY });
    return { centerX, centerY };
  };

  const positionElement = useCallback(() => {
    const internshipPath_1 = document.querySelector("#internship-1 path");
    const internshipPath_2 = document.querySelector("#internship-2 path");
    const graduatePath = document.querySelector("#graduate path");
    const certificatePath = document.querySelector("#certificate path");
    if (
      sectionRef.current &&
      internshipPath_1 &&
      internshipPath_2 &&
      certificatePath &&
      graduatePath
    ) {
      const { centerXPath_1, centerYPath_1 } = getCenterCoordinates(
        internshipPath_1,
        sectionRef.current
      );
      const { centerXPath_2, centerYPath_2 } = getCenterCoordinates(
        internshipPath_2,
        sectionRef.current
      );
      const sopraSteria_class = document.querySelector(
        `.${styles["sopraSteria"]}`
      );
      const ratp_class = document.querySelector(`.${styles["ratp"]}`);
      const graduate_class = document.querySelector(`.${styles["graduate"]}`);
      const certificate_class = document.querySelector(
        `.${styles["certificate"]}`
      );
      if (
        sopraSteria_class &&
        ratp_class &&
        certificate_class &&
        graduate_class
      ) {
        sopraSteria_class.style.left = `${centerXPath_1}px`;
        sopraSteria_class.style.top = `${centerYPath_1}px`;
        sopraSteria_class.style.transform = "translate(-120%, -55%)";
        ratp_class.style.left = `${centerXPath_2}px`;
        ratp_class.style.top = `${centerYPath_2}px`;
        ratp_class.style.transform = "translate(50%, -85%)";
        graduate_class.style.left = `${centerXPath_2}px`;
        graduate_class.style.top = `${centerYPath_2}px`;
        graduate_class.style.transform = "translate(100%, 0%)";
        certificate_class.style.left = `${centerXPath_2}px`;
        certificate_class.style.top = `${centerYPath_2}px`;
        certificate_class.style.transform = "translate(20%, 85%)";
      }
    }
  }, []);

  useEffect(() => {
    positionElement(); // Position initiale

    // Réajuster la position lors du redimensionnement
    window.addEventListener("resize", positionElement);

    // Nettoyage de l'écouteur
    return () => window.removeEventListener("resize", positionElement);
  }, [positionElement]);

  return (
    <div ref={sectionRef} className={styles["section"]}>
      <section className={styles["presentation"]}>
        <div className={styles["graduate-display"]}>
          <GraduateSvg />
          <div className={styles["sopraSteria"]}>
            <img src={sopraSteria_logo} alt="Sopra Steria Logo" />
          </div>
          <div className={styles["ratp"]}>
            <img src={ratp_logo} alt="ratp" />
          </div>{" "}
          <div className={styles["certificate"]}>
            <img src={certificate_logo} alt="certificate" />
          </div>{" "}
          <div className={styles["graduate"]}>
            <img src={graduate_logo} alt="graduate" />
          </div>
          <p className={styles["licence"]}>
            2020-2023 <br />
            Licence Informatique <br />
            Université <br />
            Paris VIII | 93200
          </p>
          <p className={styles["bts"]}>
            2016-2019
            <br /> BTS SIO option SLAM
            <br /> Lycée
            <br /> Turgot | 75003
          </p>
          <p className={styles["bac"]}>
            2014-2016 <br />
            Baccalauréat Option SEN <br />
            Lycée <br />
            Gustave Ferrié | 75010{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Section3;
