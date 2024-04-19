// Sélection de l'élément bouton et du compteur
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur
var nombreClics = 0;

// Fonction pour incrémenter le compteur et mettre à jour le texte
function addOne() {
    nombreClics++;
    compteur.textContent = nombreClics;
}

// Ajout d'un écouteur d'événements sur le bouton pour appeler la fonction addOne lorsque le bouton est cliqué
button.addEventListener("click", addOne);