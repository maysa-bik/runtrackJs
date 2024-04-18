function afficherJoursSemaines() {
    // Créer un tableau de strings contenant les jours de la semaine
    var joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
    // Boucle for pour parcourir le tableau et afficher chaque jour
    for (var i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}
// Appel de la fonction afficherJoursSemaines
afficherJoursSemaines();