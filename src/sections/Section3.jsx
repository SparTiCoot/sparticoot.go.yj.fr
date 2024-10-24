import React, { useEffect, useState } from "react";
import styles from "./Section3.module.css";
import anime from "animejs";
import { GraduateSvg } from "../components/graduateSvg";

const Section3 = () => {
  return (
    <div className={styles["section"]}>
      <section className={styles["presentation"]}>
        <div className={styles["graduate-display"]}>
          <GraduateSvg />
        </div>
      </section>
    </div>
  );
};

export default Section3;
