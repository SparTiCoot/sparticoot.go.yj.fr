import React from "react";

export default function VerticalPagination({ activeIndex, count }) {
  const progress = (activeIndex / (count - 1)) * 100;

  // Définir les couleurs par section (modifie-les selon ton design)
  const colors = ["#04BAB6", "#D94169", "#B781CF", "#DEBBC4"];

  const cursorColor = colors[activeIndex] || "#04BAB6";

  return (
    <div className="pagination">
      <div className="pagination-line">
        <div
          className="pagination-cursor"
          style={{
            top: `${progress}%`,
            background: cursorColor,  // couleur dynamique
          }}
        />
      </div>
    </div>
  );
}
