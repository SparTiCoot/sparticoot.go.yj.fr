/*
export default class SvgAnimatedPolygon {
    constructor(groupId, paths) {
        this.groupId = groupId;
        this.groupElement = document.getElementById(groupId);
        this.paths = Array.from(paths);
        this.isFilled = true;

        //this.addClickListeners();
    }

    addClickListeners() {
        this.paths.forEach(path => {
            path.addEventListener('click', this.handleClick.bind(this));
        });
    }

    handleClick(event) {
        // Exemple d'action : basculer l'opacité sur clic
        console.log(`Polygon ${this.groupId} clicked!`);
        this.toggleFill(0);

        // Optionnel : empêche la propagation si nécessaire
        event.stopPropagation();
    }

    toggleFill(opacity = 0) {
        // Basculer l'opacité pour tous les paths du groupe
        this.isFilled = !this.isFilled;
        this.paths.forEach(path => {
            path.style.fillOpacity = this.isFilled ? opacity : 1;
        });
    }

    logInfo() {
        console.log(`Group ID: ${this.groupId}, Paths count: ${this.paths.length}`);
    }


    /*
    // Méthode pour animer la transparence
    animateTransparency(duration = 2000) {
        if (this.groupElement) {
            anime({
                targets: `#${this.groupId} path`,
                opacity: [1, 0.5, 1], // Animation de l'opacité
                duration: duration,
                easing: 'easeInOutSine',
                loop: true,
            });
        }
    }

    // Méthode pour animer les contours
    animateStroke(duration = 2000) {
        if (this.groupElement) {
            anime({
                targets: `#${this.groupId} path`,
                stroke: (el) => el.getAttribute('fill'), // Récupérer et appliquer la couleur de remplissage
                strokeWidth: [0, 2], // Animation de l'épaisseur du contour
                duration: duration,
                easing: 'easeInOutQuad',
                loop: true,
            });
        }
    }

    // Méthode pour lancer à la fois la transparence et l'animation des contours
    animateAll(duration = 2000) {
        this.animateTransparency(duration);
        this.animateStroke(duration);
    }


     // Méthode pour animer une vibration (mouvement gauche-droite)
     animateVibration(amplitude = 5, duration = 500) {
        if (this.groupElement) {
            anime({
                targets: `#${this.groupId} path`,
                translateX: [-amplitude, amplitude], // Mouvement de gauche à droite
                direction: 'alternate', // Alterne entre gauche et droite
                easing: 'easeInOutSine',
                duration: duration,
                loop: true, // Boucle infinie
            });
        }
    }
}

*/

