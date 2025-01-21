import React, { useEffect, useState } from "react";
import fetchUserRepos from "../api/github.jsx";
import anime from "animejs";
import { ProjectsBatteriesSVG } from "../components/projectsBatteriesSVG";
import { DiamondSvg } from "../components/diamondSvg";
import styles from "./Section2.module.css";
import diamond_png from "../assets/images/Diamond.png";

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

const handleBatteryClick = (
  index,
  platform,
  platforms,
  repos,
  setSelectedRepo,
  setDiamondPosition
) => {
  deactivateAllPlatforms(platforms);

  const selectedRepo = repos[index];
  console.log("Batterie cliquée:", index); // Log de l'index de la batterie cliquée
  console.log("Dépôt sélectionné:", selectedRepo); // Log pour voir le dépôt sélectionné
  setSelectedRepo(selectedRepo);

  if (platform instanceof SVGElement) {
    const pathElementPlatform = platform.querySelector("path");
    if (pathElementPlatform) {
      pathElementPlatform.setAttribute("fill", "#04BAB6");

      const { left, top, width, height } = platform.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      console.log("Position du diamant:", {
        left: centerX - 80,
        top: centerY - 250,
      }); // Log pour vérifier la position du diamant
      setDiamondPosition({ left: centerX - 40, top: centerY - 610 });
    }
  }
  // Réinitialiser la bordure avant d'appliquer une nouvelle animation
  const existingBorder = document.querySelector(
    `.${styles["border-animation"]}`
  );
  if (existingBorder) {
    existingBorder.remove();
  }
};

const initSVGElements = (repos, setSelectedRepo, setDiamondPosition) => {
  const batteryElements = Array.from(
    document.querySelectorAll('[id^="battery-"]')
  ).sort((a, b) => parseInt(a.id.split("-")[1]) - parseInt(b.id.split("-")[1]));
  const platforms = Array.from(
    document.querySelectorAll('[id^="platform-"]')
  ).sort((a, b) => parseInt(a.id.split("-")[1]) - parseInt(b.id.split("-")[1]));

  // Logs pour vérifier les batteries et les plateformes récupérées et triées
  console.log("Batteries récupérées et triées:", batteryElements);
  console.log("Plateformes récupérées et triées:", platforms);

  batteryElements.forEach((batteryElement, index) => {
    const platform = platforms[index];

    console.log(`Associé Batterie ${batteryElement} à Plateforme ${platform}`);

    const handleClick = () =>
      handleBatteryClick(
        index,
        platform,
        platforms,
        repos,
        setSelectedRepo,
        setDiamondPosition
      );

    batteryElement.addEventListener("click", handleClick);

    batteryElement.cleanup = () =>
      batteryElement.removeEventListener("click", handleClick);
  });

  return batteryElements;
};

const Section2 = () => {
  const { repos, loading, error } = useGithubRepos("Sparticoot");
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [diamondPosition, setDiamondPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (repos.length === 0) return;
    const batteryElements = initSVGElements(
      repos,
      setSelectedRepo,
      setDiamondPosition
    );
    console.log("Éléments de batteries initialisés:", batteryElements); // Log pour vérifier l'initialisation des batteries

    return () => {
      batteryElements.forEach((batteryElement) => {
        if (batteryElement.cleanup) batteryElement.cleanup();
      });
    };
  }, [repos]);

  const animateBorder = () => {
    const borderElement = document.createElement("div");
    borderElement.className = styles["border-animation"];
    borderElement.style.position = "absolute";
    borderElement.style.top = "0";
    borderElement.style.left = "0";
    borderElement.style.right = "0";
    borderElement.style.bottom = "0";
    borderElement.style.border = "5px solid #04BAB6"; // Couleur de la bordure
    borderElement.style.opacity = "0"; // Initialement invisible
    borderElement.style.transform = "scale(0)"; // Réduite à 0
    document.querySelector(`.${styles["bottom"]}`).appendChild(borderElement);

    anime({
      targets: borderElement,
      scale: [{ value: 1, duration: 1000 }], // Élargit la bordure
      opacity: [{ value: 1, duration: 500 }], // Rend la bordure visible
      easing: "easeInOutSine",
    });
  };

  const animateText = () => {
    anime({
      targets: "#bottom-text",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1500,
      easing: "easeInOutQuad",
    });
  };

  useEffect(() => {
    if (!selectedRepo) return;

    console.log("Dépôt affiché dans la div 'repo-info':", selectedRepo); // Log pour vérifier le dépôt qui s'affiche
    const diamondElement = document.querySelector(`.${styles["diamond"]}`);
    positionElement(diamondElement, diamondPosition.left, diamondPosition.top);
    animateElement(styles["diamond"]);

    animateBorder();
    animateText();
  }, [selectedRepo, diamondPosition]);

  if (error) {
    return <p>Erreur lors de la récupération des dépôts GitHub.</p>;
  }

  return (
    <div className={styles["section"]}>
      <section className={styles["presentation"]}>
        <div className={styles["repo-info"]}>
          <div className={styles["bottom"]}>
            {selectedRepo && (
              <>
                <h2 id="bottom-text">{selectedRepo.name.replace(/-/g, " ")}</h2>
                <p className={styles["more-info"]} id="bottom-text">
                  {selectedRepo.description || ""}
                  <br />
                  <br />
                  Langage: {selectedRepo.language || ""}
                  <br />
                  <br />
                  <br />
                  Cliquer sur le {" "}
                  <img
                    className={styles["diamond-png"]}
                    src={diamond_png}
                    alt="Vincent VILFEU character"
                  /> {" "}
                  pour voir le projet sur GitHub
                </p>
              </>
            )}
          </div>
        </div>
        <div className={styles["animated-projects-display"]}>
          <ProjectsBatteriesSVG />
          {selectedRepo && (
            <>
              <div
                className={styles["diamond"]}
                onClick={() => window.open(selectedRepo.html_url, "_blank")}
              >
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
