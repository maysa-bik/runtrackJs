function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Erreur: Le paramètre 'order' doit être 'asc' ou 'desc'.");
    }
    return numbers;
}
// Exemples d'utilisation de la fonction tri
console.log(tri([4, 2, 7, 1, 9], "asc")); // Résultat attendu : [1, 2, 4, 7, 9]
console.log(tri([4, 2, 7, 1, 9], "desc")); // Résultat attendu : [9, 7, 4, 2, 1]
console.log(tri([4, 2, 7, 1, 9], "invalid")); // Résultat attendu : Erreur: Le paramètre 'order' doit être 'asc' ou 'desc'.