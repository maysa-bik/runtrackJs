// Définition de l'objet JSON directement dans le code JavaScript
const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

// Fonction pour récupérer la valeur associée à une clé dans une chaîne JSON
function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString); // Convertir la chaîne JSON en objet JavaScript
        return jsonObject[key]; // Récupérer la valeur associée à la clé spécifiée
    } catch (error) {
        console.error('Erreur lors de l\'analyse de la chaîne JSON :', error);
        return null;
    }
}

// Événement de clic sur le bouton "Obtenir la valeur"
document.getElementById('getValueButton').addEventListener('click', () => {
    const jsonString = document.getElementById('jsonString').value; // Récupérer la chaîne JSON du champ de texte
    const key = document.getElementById('key').value; // Récupérer la clé du champ de texte
    const result = jsonValueKey(jsonString, key); // Appeler la fonction pour obtenir la valeur

    // Afficher le résultat dans la div "result"
    document.getElementById('result').textContent = result || 'Clé introuvable ou erreur.';
});


