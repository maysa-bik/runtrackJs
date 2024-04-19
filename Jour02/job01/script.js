function citation() {
    var citationElement = document.getElementById("citation");
    if (citationElement) {
        var citationText = citationElement.textContent;
        console.log("La citation est : " + citationText);
    } else {
        console.log("L'élément avec l'ID 'citation' n'a pas été trouvé.");
    }
}

// Ajout d'un écouteur d'événements sur le bouton
document.getElementById("button").addEventListener("click", citation);



