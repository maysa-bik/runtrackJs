function showhide() {
    var article = document.getElementById("article");
    var button = document.getElementById("button");

    if (!article) {
        // Si l'article n'existe pas, le créer et l'ajouter au contenu de la page
        article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
        button.textContent = "Masquer Article";

    } else {
        // Si l'article existe, le supprimer du contenu de la page
        article.remove();
        button.textContent = "Afficher Article";
    }
}    