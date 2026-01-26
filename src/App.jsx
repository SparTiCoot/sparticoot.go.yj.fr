import React, { useEffect, useState } from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import VerticalPagination from "./components/VerticalPagination";
import "./main.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0); // section 1 au départ
  const [sectionCount, setSectionCount] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".snap-container");

    // Récupération automatique du nombre de sections
    const sections = container.querySelectorAll(".section");
    setSectionCount(sections.length);

    // Gestion de la pagination active au scroll
    const onScroll = () => {
      const index = Math.round(container.scrollTop / window.innerHeight);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="snap-container">
      <VerticalPagination activeIndex={activeIndex} count={sectionCount} />
      <div className="section"><Section1 /></div>
      <div className="section"><Section2 /></div>
      <div className="section"><Section3 /></div>
    </div>
  );
}

export default App;
