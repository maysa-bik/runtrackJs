// Sélection de l'élément textarea
var keylogger = document.getElementById("keylogger");

// Ajout d'un écouteur d'événements sur le document pour capturer les touches du clavier
document.addEventListener("keydown", function(event) {
    // Vérification si la touche enfoncée est une lettre de l'alphabet (a-z)
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Si le focus est sur le textarea, ajoutez la lettre deux fois
        if (document.activeElement === keylogger) {
            keylogger.value += event.key + event.key;
        } else {
            // Sinon, ajoutez la lettre une fois
            keylogger.value += event.key;
        }
    }
});
