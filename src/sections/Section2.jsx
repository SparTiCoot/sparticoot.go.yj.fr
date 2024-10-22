import React, { useEffect, useState } from "react";
import fetchUserRepos from "../api/github.jsx";
import anime from "animejs";
import { ProjectsDisplaySvg } from "../components/projectsDisplaySVG";
import styles from "./Section2.module.css";

const Section2 = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null); // État pour stocker le dépôt sélectionné
  const [loading, setLoading] = useState(true);
  const [pathPosition, setPathPosition] = useState(null);

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

  useEffect(() => {
    if (selectedRepo) {
      const path = document.querySelector("#tv path");
      if (path) {
        const rect = path.getBoundingClientRect();
        
        // Calcul du centre du path
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Repositionnement dynamique de la div
        const repoInfoDiv = document.querySelector(`.${styles["repo-info"]}`);
        if (repoInfoDiv) {
          repoInfoDiv.style.position = "absolute"; // S'assure que la div est positionnée en absolute
          repoInfoDiv.style.left = `${centerX}px`; // Position X
          repoInfoDiv.style.top = `${centerY}px`; // Position Y
          repoInfoDiv.style.transform = "translate(-50%, -80%)"; // Centrer la div par rapport à son point médian
        }
        console.log(repoInfoDiv); // Vérifie si la div est bien trouvée
      }
    }
  }, [selectedRepo]);


  const handleClickBattery = (index, platform, platforms, repos) => {
    deactivateAll(platforms);
    console.log(`Battery ${index + 1} clicked!`);
    const repo = repos[index]; // Récupère le dépôt associé à la batterie cliquée
    console.log("repos :" + repo);
    if (repo) {
      console.log("repos :" + repo);
      setSelectedRepo(repo); // Met à jour l'état du dépôt sélectionné
    }
    if (platform && platform instanceof SVGElement) {
      const pathElement = platform.querySelector("path");
      if (pathElement) {
        pathElement.setAttribute("fill", "red");
        // console.log(`New fill: ${pathElement.getAttribute("fill")}`);
      }
    } else {
      console.error("L'élément sélectionné n'est pas un élément SVG.");
    }
  };

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
              <p>{selectedRepo.description || ""}</p>
              <p>Langage: {selectedRepo.language || ""}</p>
              {/* <p>
                <a
                  href={selectedRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le dépôt sur GitHub
                </a>
              </p> */}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Section2;
