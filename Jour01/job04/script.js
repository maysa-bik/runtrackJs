function bisextile(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemples d'utilisation de la fonction bisextile
console.log(bisextile(2000)); // Résultat attendu : true
console.log(bisextile(2021)); // Résultat attendu : false
console.log(bisextile(2024)); // Résultat attendu : true