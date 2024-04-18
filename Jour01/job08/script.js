function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}
// Appel de la fonction sommeNombresPremiers avec deux nombres
console.log(sommeNombresPremiers(5, 7)); // Résultat attendu : 12 (car 5 et 7 sont des nombres premiers)
console.log(sommeNombresPremiers(6, 8)); // Résultat attendu : false (car 6 n'est pas un nombre premier)