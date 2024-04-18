function jourTravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var année = date.getFullYear();
    
    var joursFeries2024 = [
        "01-01", // Nouvel An
        "04-01", // Lundi de Pâques
        "05-01", // Fête du Travail
        "05-08", // Victoire 1945
        "05-30", // Ascension
        "06-10", // Pentecôte
        "07-14", // Fête Nationale
        "08-15", // Assomption
        "11-01", // Toussaint
        "11-11", // Armistice
        "12-25"  // Noël
    ];
    
    var jourSemaine = date.getDay(); // 0 pour dimanche, 1 pour lundi, etc.

    var dateStr = jour + "-" + mois + "-" + année;

    if (joursFeries2024.includes(dateStr)) {
        console.log("Le " + dateStr + " est un jour férié.");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, le " + dateStr + " est un week-end.");
    } else {
        console.log("Oui, le " + dateStr + " est un jour travaillé.");
    }
}
// Appel de la fonction jourTravaille avec une date spécifique (par exemple, le 1er janvier 2024)
jourTravaille(new Date(2024, 0, 1)); // Résultat attendu : Le 01-01-2024 est un jour férié.