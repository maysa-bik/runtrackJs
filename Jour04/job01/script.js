document.getElementById('button').addEventListener('click', () => {
    fetch('expression.txt') // Charger le contenu du fichier expression.txt
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier.');
            }
            return response.text(); // Convertir la réponse en texte
        })
        .then(data => {
            // Placer le contenu du fichier dans le paragraphe
            document.getElementById('content').textContent = data;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});

