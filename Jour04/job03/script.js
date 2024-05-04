document.getElementById('filtrer').addEventListener('click', function() {
    var filter = {
        id: document.getElementById('id').value,
        nom: document.getElementById('nom').value.toLowerCase(),
        type: document.getElementById('type').value
    };

    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier.');
            }
            return response.json(); // Convertir la réponse en objet JSON
        })
        .then(data => {
            var filteredResults = data.filter(function(pokemon) {
                return (filter.id === '' || pokemon.id.toString() === filter.id) &&
                       (filter.nom === '' || pokemon.name.english.toLowerCase().includes(filter.nom)) &&
                       (filter.type === '' || pokemon.type.includes(filter.type));
            });

            displayResults(filteredResults);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});

function displayResults(results) {
    var html = '<div class="pokemon-list">';
    if (results.length === 0) {
        html += '<p>Aucun résultat trouvé.</p>';
    } else {
        results.forEach(function(pokemon) {
            html += '<div class="pokemon">';
            html += '<h2>' + pokemon.name.english + ' (ID: ' + pokemon.id + ')</h2>';
            html += '<p>Type: ' + pokemon.type.join(', ') + '</p>';
            html += '<p>Stats:</p>';
            html += '<ul>';
            for (var stat in pokemon.base) {
                html += '<li>' + stat + ': ' + pokemon.base[stat] + '</li>';
            }
            html += '</ul>';
            html += '</div>';
        });
    }
    html += '</div>';
    document.getElementById('results').innerHTML = html;
}

