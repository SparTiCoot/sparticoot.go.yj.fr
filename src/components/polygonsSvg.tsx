import * as React from "react";
import { SVGProps, useState, useEffect } from "react";
import anime from "animejs";

export const PolygonsSvg = (props: SVGProps<SVGSVGElement>) => {

  // Utilisez Anime.js pour animer l'opacité d'un groupe donné
  const toggleGroupOpacityAnime = (groupId: string) => {
    const group = document.querySelector(`#${groupId}`);
    if (group) {
      const currentOpacity = parseFloat(
        getComputedStyle(group.querySelector("path")!).fillOpacity || "1"
      );
      const newOpacity = currentOpacity === 1 ? 0 : 1;

      anime({
        targets: `#${groupId} path`,
        fillOpacity: newOpacity,
        duration: 1000,
        easing: "easeInOutQuad",
      });
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.currentTarget;
    const currentOpacity = parseFloat(getComputedStyle(target).fillOpacity || "1");

    // Si l'opacité est 0, applique une opacité temporaire de 1
    if (currentOpacity === 0) {
      anime({
        targets: target,
        fillOpacity: 1,
        duration: 300,
        easing: "easeInOutQuad",
      });
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<SVGPathElement>) => {
    const target = event.currentTarget;
    const currentOpacity = parseFloat(getComputedStyle(target).fillOpacity || "1");

    // Si l'opacité était temporairement à 1, la ramener à 0
    if (currentOpacity === 1) {
      anime({
        targets: target,
        fillOpacity: 0,
        duration: 300,
        easing: "easeInOutQuad",
      });
    }
  };

  // Animation du groupe "animated-Tetraedre_rose"
  useEffect(() => {
    anime({
      targets: "#animated-Tetraedre_rose", // Cible le groupe avec l'ID correct
      translateX: [
        { value: 150, duration: 2000, easing: "easeInOutQuad" },
        { value: 0, duration: 2000, easing: "easeInOutQuad" },
        { value: 150, duration: 2000, easing: "easeInOutQuad" },
        { value: 0, duration: 2000, easing: "easeInOutQuad" }, // Trajectoire fluide de boucle
      ],
      translateY: [
        { value: -100, duration: 2000, easing: "easeInOutQuad" },
        { value: 0, duration: 2000, easing: "easeInOutQuad" },
        { value: -100, duration: 2000, easing: "easeInOutQuad" },
        { value: 0, duration: 2000, easing: "easeInOutQuad" }, // Trajectoire fluide de boucle
      ],
      rotate: [
        { value: 50, duration: 2000, easing: "easeInOutQuad" },
        { value: 0, duration: 2000, easing: "easeInOutQuad" },
        { value: 50, duration: 2000, easing: "easeInOutQuad" },
        { value: 0, duration: 2000, easing: "easeInOutQuad" }, // Trajectoire fluide de boucle
      ],
      loop: true, // Animation en boucle
      direction: "alternate", // Alternance de l'animation
      easing: "easeInOutQuad", // Utilisation d'un easing fluide
    });

    anime({
      targets: "#animated-Prisme_beige", // Cible le groupe avec l'ID correct
      translateX: [
        { value: 80, duration: 2500, easing: "easeInOutQuad" },
        { value: 0, duration: 2500, easing: "easeInOutQuad" },
        { value: 80, duration: 2500, easing: "easeInOutQuad" },
        { value: 0, duration: 2500, easing: "easeInOutQuad" },
      ],
      translateY: [
        { value: -120, duration: 2500, easing: "easeInOutQuad" },
        { value: 0, duration: 2500, easing: "easeInOutQuad" },
        { value: -120, duration: 2500, easing: "easeInOutQuad" },
        { value: 0, duration: 2500, easing: "easeInOutQuad" },
      ],
      rotate: [
        { value: 45, duration: 2500, easing: "easeInOutQuad" },
        { value: 0, duration: 2500, easing: "easeInOutQuad" },
        { value: 45, duration: 2500, easing: "easeInOutQuad" },
        { value: 0, duration: 2500, easing: "easeInOutQuad" },
      ],
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });

    // Octogone
    anime({
      targets: "#animated-Octogone",
      translateY: [
        { value: 25, duration: 4000, easing: "easeInOutQuad" },
        { value: 0, duration: 4000, easing: "easeInOutQuad" },
      ],
      rotate: [
        { value: 360, duration: 8000, easing: "linear" },
      ],
      loop: true,
      direction: "normal",
    });

    // Grand_Cube
    anime({
      targets: "#animated-Grand_Cube",
      translateY: [
        { value: 70, duration: 2600, easing: "easeInOutQuad" },
        { value: 0, duration: 2600, easing: "easeInOutQuad" },
      ],
      rotate: [
        { value: 45, duration: 2600, easing: "easeInOutQuad" },
        { value: 0, duration: 2600, easing: "easeInOutQuad" },
      ],
      loop: true,
      direction: "alternate",
    });

   
  }, []);



  return (
    <svg
      width="1432"
      height="1024"
      viewBox="-200 0 1632 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <g id="animated-Octogone" onClick={() => toggleGroupOpacityAnime("animated-Octogone")}>
        <path
          d="M544.201 615.892L550.33 572.767L498.619 561.301L437.194 588.667L421.407 633.149L476.592 649.352L544.201 615.892Z"
          fill="#BD2A2E"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M476.592 649.352L509.927 711.186L454.741 694.983L421.406 633.149L476.592 649.352Z"
          fill="#972326"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M544.201 615.891L577.537 677.725L509.927 711.186L476.592 649.352L544.201 615.891Z"
          fill="#711B1D"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M550.33 572.767L583.664 634.6L577.536 677.725L544.201 615.891L550.33 572.767Z"
          fill="#591517"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Prisme" onClick={() => toggleGroupOpacityAnime("animated-prisme")}>
        <path
          d="M762.031 1007.56L740.001 807.961L775.912 924.166L762.031 1007.56Z"
          fill="#F2BC31"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M775.912 924.166L840.645 923.175L762.031 1007.56L775.912 924.166Z"
          fill="#FFC636"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M840.644 923.175L740 807.96L775.912 924.165L840.644 923.175Z"
          fill="#FFCF57"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Parallelepipede" onClick={() => toggleGroupOpacityAnime("animated-Parallelepipede")}>
        <path
          d="M-129 15.4702L58.7801 42.855V207L-129 109.198V15.4702Z"
          fill="#00835D"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M246.56 15.4702L58.7803 42.855V207L246.56 109.198V15.4702Z"
          fill="#004733"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M58.7801 5L246.56 15.4701L58.7801 42.8549L-129 15.4701L58.7801 5Z"
          fill="#006145"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Grand_Cube" onClick={() => toggleGroupOpacityAnime("animated-Grand_Cube")}>
        <path
          d="M838.216 143.553L770.648 69.6465L631.64 131.537L715.481 198.198L838.216 143.553Z"
          fill="#413B3D"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M760.936 -30.02L770.647 69.6467L631.64 131.537L638.201 24.6251L760.936 -30.02Z"
          fill="#474143"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M821.992 46.7868L838.216 143.554L770.648 69.6466L760.936 -30.0201L821.992 46.7868Z"
          fill="#555555"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Hemisphere" onClick={() => toggleGroupOpacityAnime("animated-Hemisphere")}>
        <path
          d="M1285.58 182.287C1308.43 232.568 1316.38 278.132 1303.34 284.056C1356.79 259.771 1381.59 199.323 1358.75 149.042C1335.9 98.7611 1274.05 77.6865 1220.61 101.971C1233.65 96.0477 1262.73 132.006 1285.58 182.287Z"
          fill="#711B1D"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1285.58 182.288C1262.73 132.006 1233.64 96.0473 1220.61 101.971C1207.57 107.895 1215.52 153.459 1238.37 203.74C1261.21 254.022 1290.3 289.98 1303.34 284.056C1316.38 278.132 1308.43 232.569 1285.58 182.288Z"
          fill="#972326"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Pyramide" onClick={() => toggleGroupOpacityAnime("animated-Pyramide")}>
        <path
          d="M-103 811.558L210.465 688L16.9503 1008.4L-103 811.558Z"
          fill="#BF395C"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M247 1022.95L210.465 688L16.9507 1008.4L247 1022.95Z"
          fill="#A02E4C"
          fillOpacity={1}
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Prisme_beige" onClick={() => toggleGroupOpacityAnime("animated-Prisme_beige")}>
        <path
          d="M162 551.105L210.816 494.242L175.838 435.002L162 551.105Z"
          fill="#B67861"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M175.838 435.002L210.816 494.242L284.184 478.964L175.838 435.002Z"
          fill="#DE9073"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M210.816 494.243L284.184 478.964L241.879 546.854L162 551.106L210.816 494.243Z"
          fill="#F2D0A7"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Octaedre" onClick={() => toggleGroupOpacityAnime("animated-Octaedre")}>
        <path
          d="M1215.91 389.002L1068 474.981L1118.57 475.659L1215.91 389.002Z"
          fill="#00835D"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1194.3 506.988L1215.91 389.002L1118.57 475.659L1194.3 506.988Z"
          fill="#006145"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1111.94 640.324L1068 474.981L1118.57 475.654L1111.94 640.324Z"
          fill="#00835D"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1215.91 389.002L1253 551.514L1194.3 506.988L1215.91 389.002Z"
          fill="#004733"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1194.3 506.989L1111.94 640.325L1118.57 475.654L1194.3 506.989Z"
          fill="#006145"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1111.94 640.325L1253 551.514L1194.31 506.983L1111.94 640.325Z"
          fill="#004733"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Prisme_Violet" onClick={() => toggleGroupOpacityAnime("animated-Prisme_Violet")}>
        <path
          d="M319.242 211.211L344.563 323.119L362.306 233.64L319.242 211.211Z"
          fill="#0D0C35"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M401.203 183.565L344.563 323.118L362.306 233.64L401.203 183.565Z"
          fill="#13124A"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M362.306 233.64L319.242 211.21L401.203 183.565L362.306 233.64Z"
          fill="#171559"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Petit_Cube" onClick={() => toggleGroupOpacityAnime("animated-Petit_Cube")}>
        <path
          d="M1060.8 120.06L1033.28 99.6517L990.641 129.51L1023.15 146.423L1060.8 120.06Z"
          fill="#F2BC31"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1023.52 66.8159L1033.28 99.6521L990.642 129.51L985.866 93.1786L1023.52 66.8159Z"
          fill="#FFCF57"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M1049.03 88.6225L1060.8 120.06L1033.28 99.6508L1023.52 66.8146L1049.03 88.6225Z"
          fill="#FFC636"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Hemisphere_Orange" onClick={() => toggleGroupOpacityAnime("animated-Hemisphere_Orange")}>
        <path
          d="M527.949 931.154C549.919 933.463 567.244 939.953 566.646 945.65C569.1 922.296 553.279 901.493 531.309 899.184C509.339 896.875 489.538 913.934 487.084 937.288C487.683 931.591 505.979 928.845 527.949 931.154Z"
          fill="#FF6444"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M527.949 931.154C505.979 928.845 487.683 931.591 487.084 937.288C486.485 942.984 503.81 949.475 525.781 951.784C547.751 954.093 566.047 951.347 566.646 945.65C567.244 939.953 549.919 933.463 527.949 931.154Z"
          fill="#FF8066"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
      <g id="animated-Tetraedre_rose" onClick={() => toggleGroupOpacityAnime("animated-Tetraedre_rose")}>
        <path
          d="M888.387 371.582L842.198 385.128L873.854 342.033L888.387 371.582Z"
          fill="#A02E4C"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <path
          d="M841.31 337.002L842.198 385.128L873.854 342.033L841.31 337.002Z"
          fill="#D94169"
          fillOpacity={1}
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </g>
    </svg>
  );
};
export { PolygonsSvg as ReactComponent };