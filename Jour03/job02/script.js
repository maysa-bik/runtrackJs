$(document).ready(function() {
    // Sélection du bouton de mélange et du conteneur d'images
    var shuffleButton = $("#shuffleButton");
    var container = $("#container");
    var images = container.children(); // Sélectionnez toutes les images une seule fois

    // Booléen pour suivre si l'utilisateur a commencé à déplacer les images
    var userStartedMoving = false;

    // Mélanger les images lors du clic sur le bouton de mélange
    shuffleButton.click(function() {
        var shuffledImages = images.toArray().sort(function() {
            return Math.random() - 0.5; // Mélange aléatoire des images
        });

        // Remplacement des images dans le conteneur dans le nouvel ordre
        container.empty(); // Vide le conteneur
        shuffledImages.forEach(function(image) {
            container.append(image); // Réinsère chaque image dans le conteneur
        });

        // Réinitialise le booléen lorsque les images sont mélangées
        userStartedMoving = false;
    });

    // Activation de la fonctionnalité de glisser-déposer (drag and drop) pour les images
    container.on("dragstart", "img", function(event) {
        $(this).addClass("dragging");
        userStartedMoving = true; // L'utilisateur a commencé à déplacer les images
        $("#resultMessage").text("Vous avez perdu").css("color", "red");
    });

    container.on("dragover", function(event) {
        event.preventDefault();
    });

    container.on("drop", function(event) {
        var draggedImage = $(".dragging");
        var targetImage = $(event.target);

        if (targetImage.is("img")) {
            draggedImage.insertBefore(targetImage);
        } else {
            container.append(draggedImage);
        }

        draggedImage.removeClass("dragging");

        // Vérifier si les images sont dans l'ordre correct après chaque réorganisation
        checkOrder();
    });

    // Fonction pour vérifier si les images sont dans l'ordre correct
    function checkOrder() {
        var ordered = true;
        var prevIndex = -1;

        // Parcours de chaque image pour vérifier l'ordre
        container.children().each(function() {
            var index = $(this).index();
            if (index < prevIndex) {
                ordered = false;
                return false; // Arrête la boucle si l'ordre est incorrect
            }
            prevIndex = index;
        });

        // Affichage du message approprié en fonction de l'ordre des images et de l'état de l'utilisateur
        var resultMessage = $("#resultMessage");
        if (ordered && userStartedMoving) {
            resultMessage.text("Vous avez gagné").css("color", "green");
        } else if (!ordered && userStartedMoving) {
            resultMessage.text("Vous avez perdu").css("color", "red");
        }
    }
});



