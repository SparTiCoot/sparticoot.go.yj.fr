/*import SvgAnimatedPolygon from './SvgAnimatedPolygon';


export function initializeAnimatedPolygons(svgPolygons) {
    // Vérifier que svgPolygons est un tableau et qu'il contient des éléments valides
    if (!Array.isArray(svgPolygons) || svgPolygons.length === 0) {
        console.error("svgPolygons is not a valid array or it's empty.");
        return [];  // Retourner un tableau vide si l'entrée est invalide
    }

    // Tableau pour stocker les instances de SvgAnimatedPolygon
    const animatedPolygons = [];

    // Parcourir chaque source SVG
    svgPolygons.forEach(svgPolygon => {
        // Sélectionner tous les groupes animés dans chaque SVG
        const animatedGroups = svgPolygon.querySelectorAll('[id^="animated-"]');

        animatedGroups.forEach(group => {
            const groupId = group.id; // Récupérer l'id du groupe
            console.log("groupId :", groupId);
            // Sélectionner les paths dans le groupe qui ont un attribut fill
            const pathsWithFill = group.querySelectorAll('path[fill]');
            console.log(pathsWithFill);
            // Créer une nouvelle instance de SvgAnimatedPolygon avec l'id du groupe
            const polygon = new SvgAnimatedPolygon(groupId, pathsWithFill);
            animatedPolygons.push(polygon); // Ajouter au tableau
        });
    });

    return animatedPolygons;
}



export default initializeAnimatedPolygons;
*/