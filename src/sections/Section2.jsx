import React, { useEffect, useState } from "react";
import fetchUserRepos from "../api/github.jsx";
import anime from "animejs";
import { ProjectsDisplaySvg } from "../components/projectsDisplaySVG";
import { DiamondSvg } from "../components/diamondSvg";
import styles from "./Section2.module.css";

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUserRepos(username)
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [username]);

  return { repos, loading, error };
};

const getCenterCoordinates = (element) => {
  const { left, top, width, height } = element.getBoundingClientRect();
  return { centerX: left + width / 2, centerY: top + height / 2 };
};

const positionElement = (element, left, top) => {
  if (element) {
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    element.style.transform = "translate(-65%, -50%)";
  }
};

const animateElement = (targetClass) => {
  anime({
    targets: `.${targetClass}`,
    translateY: [{ value: 0 }, { value: -20 }],
    scale: [{ value: 1.2 }, { value: 1 }],
    duration: 2000,
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });
};

const deactivateAllPlatforms = (platforms) => {
  platforms.forEach((platform) => {
    const pathElement = platform.querySelector("path");
    if (pathElement) pathElement.setAttribute("fill", "#474143");
  });
};

const handleBatteryClick = (index, platform, platforms, repos, setSelectedRepo, setDiamondPosition) => {
  deactivateAllPlatforms(platforms);

  const selectedRepo = repos[index];
  setSelectedRepo(selectedRepo);

  if (platform instanceof SVGElement) {
    const pathElementPlatform = platform.querySelector("path");
    if (pathElementPlatform) {
      pathElementPlatform.setAttribute("fill", "#04BAB6");

      const { left, top, width, height } = platform.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      setDiamondPosition({ left: centerX -40, top: centerY - 150 });
    }
  }
};

const initSVGElements = (repos, setSelectedRepo, setDiamondPosition) => {
  const batteryElements = Array.from(document.querySelectorAll('[id^="battery-"]')).sort(
    (a, b) => parseInt(a.id.split("-")[1]) - parseInt(b.id.split("-")[1])
  );
  const platforms = Array.from(document.querySelectorAll('[id^="platform-"]')).sort(
    (a, b) => parseInt(a.id.split("-")[1]) - parseInt(b.id.split("-")[1])
  );

  batteryElements.forEach((batteryElement, index) => {
    const platform = platforms[index];
    const handleClick = () =>
      handleBatteryClick(index, platform, platforms, repos, setSelectedRepo, setDiamondPosition);

    batteryElement.addEventListener("click", handleClick);

    batteryElement.cleanup = () => batteryElement.removeEventListener("click", handleClick);
  });

  return batteryElements;
};

const Section2 = () => {
  const { repos, loading, error } = useGithubRepos("Sparticoot");
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [diamondPosition, setDiamondPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (repos.length === 0) return;
    const batteryElements = initSVGElements(repos, setSelectedRepo, setDiamondPosition);

    return () => {
      batteryElements.forEach((batteryElement) => {
        if (batteryElement.cleanup) batteryElement.cleanup();
      });
    };
  }, [repos]);

  useEffect(() => {
    if (!selectedRepo) return;

    const diamondElement = document.querySelector(`.${styles["diamond"]}`);
    positionElement(diamondElement, diamondPosition.left, diamondPosition.top);
    animateElement(styles["diamond"]);
  }, [selectedRepo, diamondPosition]);

  useEffect(() => {
    if (!selectedRepo) return;

    const tvPath = document.querySelector("#tv path");
    const { centerX, centerY } = getCenterCoordinates(tvPath);
    const repoInfoDiv = document.querySelector(`.${styles["repo-info"]}`);
    positionElement(repoInfoDiv, centerX, centerY);
  }, [selectedRepo]);

  if (error) {
    return <p>Erreur lors de la récupération des dépôts GitHub.</p>;
  }

  return (
    <div className={styles["section"]}>
      <section className={styles["presentation"]}>
        <div className={styles["animated-projects-display"]}>
          <ProjectsDisplaySvg />
          {selectedRepo && (
            <>
              <div className={styles["repo-info"]}>
                <h2>{selectedRepo.name.replace(/-/g, " ")}</h2>
                <p>
                  {selectedRepo.description || ""}
                  <br />
                  <br />
                  Langage: {selectedRepo.language || ""}
                </p>
              </div>
              <div className={styles["diamond"]} onClick={() => window.open(selectedRepo.html_url, "_blank")}>
                <DiamondSvg />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Section2;
