import React, { useEffect, useState } from "react";
import fetchUserRepos from "../api/github.jsx";
import anime from "animejs";
import { ProjectsDisplaySvg } from "../components/projectsDisplaySVG";
import { DiamondSvg } from "../components/diamondSvg";
import styles from "./Section2.module.css";

const Section2 = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null); // État pour stocker le dépôt sélectionné
  const [loading, setLoading] = useState(true);
  const [diamondPosition, setDiamondPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    fetchUserRepos("Sparticoot")
      .then((data) => {
        console.log("Données chargées :", data); // Vérifie ici si les dépôts sont chargés
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setError(true));

    // Mettre à jour les batteries et les plateformes seulement après le chargement des repos
  }, []);

  useEffect(() => {
    if (repos.length > 0) {
      const batteryElements = Array.from(
        document.querySelectorAll('[id^="battery-"]')
      ).sort((a, b) => {
        const aIndex = parseInt(a.id.split("-")[1], 10); // Récupère l'index de la batterie
        const bIndex = parseInt(b.id.split("-")[1], 10);
        return aIndex - bIndex; // Trie par ordre croissant
      });

      const platforms = Array.from(
        document.querySelectorAll('[id^="platform-"]')
      ).sort((a, b) => {
        const aIndex = parseInt(a.id.split("-")[1], 10); // Récupère l'index de la plateforme
        const bIndex = parseInt(b.id.split("-")[1], 10);
        return aIndex - bIndex; // Trie par ordre croissant
      });

      console.log(repos);

      if (batteryElements.length > 0 && platforms.length > 0) {
        batteryElements.forEach((batteryElement, index) => {
          const platformId = `platform-${index + 1}`;
          const platform = document.getElementById(platformId);

          if (platform) {
            const handleClick = () =>
              handleClickBattery(index, platform, platforms, repos);

            batteryElement.addEventListener("click", handleClick);

            // Nettoyage lors du démontage du composant
            batteryElement.cleanup = () => {
              batteryElement.removeEventListener("click", handleClick);
            };
          }
        });
      }

      // Nettoyage des écouteurs
      return () => {
        batteryElements.forEach((batteryElement) => {
          if (batteryElement.cleanup) {
            batteryElement.cleanup();
          }
        });
      };
    }
  }, [repos]);

  const deactivateAll = (platforms) => {
    platforms.forEach((platform) => {
      if (platform && platform instanceof SVGElement) {
        const pathElement = platform.querySelector("path");
        if (pathElement) {
          pathElement.setAttribute("fill", "#474143");
        }
      }
    });
  };

  const handleClickBattery = (index, platform, platforms, repos) => {
    deactivateAll(platforms);
    console.log(`Battery ${index + 1} clicked!`);
    const repo = repos[index]; // Récupère le dépôt associé à la batterie cliquée
    setSelectedRepo(repo); // Met à jour l'état du dépôt sélectionné
    console.log("repos :" + repo);
    if (repo) {
      console.log("repos :" + repo);
      setSelectedRepo(repo); // Met à jour l'état du dépôt sélectionné
    }
    if (platform && platform instanceof SVGElement) {
      const pathElementPlatform = platform.querySelector("path");
      if (pathElementPlatform) {
        pathElementPlatform.setAttribute("fill", "#04BAB6");

        // Récupère les coordonnées de la plateforme sélectionnée
        const rect = platform.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Ajuste pour placer le diamant légèrement au-dessus (par exemple, 20px)
      const offsetAbove = 100; // Ajuste cette valeur selon la hauteur souhaitée

      // Positionne le DiamondSvg légèrement au-dessus de la plateforme
      setDiamondPosition({ left: centerX, top: centerY - offsetAbove });

      
      }
    } else {
      console.error("L'élément sélectionné n'est pas un élément SVG.");
    }
  };

  const handleDiamondClick = () => {
    if (selectedRepo) {
      window.open(selectedRepo.html_url, "_blank");
    }
  };

  const animateDiamond = () => {
    const diamondElement = document.querySelector(`.${styles["diamond"]}`);
    
    // Animation de flottement
    anime({
      targets: diamondElement,
      translateY: [
        { value: 0, duration: 600, easing: 'easeInOutSine' },
        { value: -10, duration: 600, easing: 'easeInOutSine' }
      ],
      loop: true,
      direction: 'alternate',
      scale: [
        { value: 1.1, duration: 500, easing: 'easeInOutSine' },
        { value: 1, duration: 300, easing: 'easeInOutSine' }
      ],
      duration: 3000,
      delay: anime.stagger(200),
      complete: () => diamondElement.style.left = `${diamondPosition.left}px`,
      complete: () => diamondElement.style.top = `${diamondPosition.top}px`
    });
  };
  
   // Positionne le diamant une fois que selectedRepo est mis à jour
   useEffect(() => {
    if (selectedRepo) {
      const diamondElement = document.querySelector(`.${styles["diamond"]}`);
      if (diamondElement) {
        diamondElement.style.left = `${diamondPosition.left}px`;
        diamondElement.style.top = `${diamondPosition.top}px`;
        diamondElement.style.transform = "translate(-50%, -50%)"; // Centre le diamant
      }
      animateDiamond();
    }
  }, [selectedRepo, diamondPosition]); // Exécute l'effet quand selectedRepo ou diamondPosition changent


  useEffect(() => {
    if (selectedRepo) {
      const tvPath = document.querySelector("#tv path");
      if (tvPath) {
        const rect = tvPath.getBoundingClientRect();

        // Calcul du centre du tvPath
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Repositionnement dynamique de la div
        const repoInfoDiv = document.querySelector(`.${styles["repo-info"]}`);
        if (repoInfoDiv) {
          repoInfoDiv.style.position = "absolute"; // S'assure que la div est positionnée en absolute
          setTimeout(() => {
            repoInfoDiv.style.left = `${centerX}px`; // Position X
            repoInfoDiv.style.top = `${centerY}px`; // Position Y
            repoInfoDiv.style.transform = "translate(-45%, -45%)"; // Centrer la div par rapport à son point médian
          }, 0); // Vous pouvez ajuster le délai si nécessaire
        }
      }
    }
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
            <div className={styles["repo-info"]}>
              <h2>{selectedRepo.name.replace(/-/g, " ")}</h2>
              <p>
                {selectedRepo.description || ""}
                <br />
                <br />
                Langage: {selectedRepo.language || ""}
              </p>
            </div>
          )}
           {selectedRepo && (
            <div className={styles["diamond"]} onClick={handleDiamondClick}>
              <DiamondSvg />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Section2;
