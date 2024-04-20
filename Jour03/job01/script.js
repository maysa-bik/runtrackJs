// Attendez que le document soit prêt
$(document).ready(function() {
    // Sélectionnez le bouton d'affichage et l'élément à afficher
    var showButton = $("#showButton");
    var citation = $("#citation");

    // Ajoutez un gestionnaire d'événements pour le clic sur le bouton d'affichage
    showButton.click(function() {
        citation.show(); // Affiche l'élément
    });

    // Sélectionnez le bouton de masquage
    var hideButton = $("#hideButton");

    // Ajoutez un gestionnaire d'événements pour le clic sur le bouton de masquage
    hideButton.click(function() {
        citation.hide(); // Masque l'élément
    });
});
