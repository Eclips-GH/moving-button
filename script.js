const button = document.querySelector('.moving-button');

// Fonction pour déplacer le bouton à une position aléatoire
function moveButton() {
    const windowWidth = window.innerWidth; // Largeur de la fenêtre
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre

    // Générer des positions aléatoires dans les limites de la fenêtre
    const newX = Math.random() * (windowWidth - button.offsetWidth);
    const newY = Math.random() * (windowHeight - button.offsetHeight);

    // Appliquer les nouvelles positions
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

// Ajout des écouteurs d'événements pour ordinateur et mobile
button.addEventListener('mouseover', moveButton); // Souris (ordinateur)
button.addEventListener('touchstart', moveButton); // Toucher (mobile)
