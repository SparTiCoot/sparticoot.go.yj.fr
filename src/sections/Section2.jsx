import React, { useEffect } from "react";
import anime from "animejs";
import styles from "./Section2.module.css";

const Section2 = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUserRepos('Sparticoot')
      .then(setRepos)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p>Erreur lors de la récupération des dépôts GitHub.</p>;
  }

  return (
    <div className={styles["section"]}>
      <section className={styles["presentation"]}>
        
      </section>
    </div>
  );
};

export default Section2;
