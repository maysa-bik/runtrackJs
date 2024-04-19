document.addEventListener("scroll", function() {
    var scrollTop = window.scrollY; // Récupère la position de défilement verticale de la fenêtre
    var scrollHeight = document.body.scrollHeight - window.innerHeight; // Calcule la hauteur totale de défilement

    // Calcule le pourcentage de défilement
    var scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Change la couleur du footer en fonction du pourcentage de défilement
    var footer = document.querySelector("footer");
    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});
