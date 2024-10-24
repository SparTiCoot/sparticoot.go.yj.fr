import React, { useEffect } from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
/*
import Section4 from './components/Section4';
*/
import "./main.css";

function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      const container = document.querySelector(".snap-container");
      const currentScroll = container.scrollTop;
      const sectionHeight = window.innerHeight;

      // Calcul de la direction du scroll et de la section suivante/précédente
      if (event.deltaY > 0) {
        container.scrollTo({
          top: currentScroll + sectionHeight,
          behavior: "smooth",
        });
      } else {
        container.scrollTo({
          top: currentScroll - sectionHeight,
          behavior: "smooth",
        });
      }
    };

    const container = document.querySelector(".snap-container");
    container.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="snap-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
