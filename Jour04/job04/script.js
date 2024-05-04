document.addEventListener("DOMContentLoaded", function() {
    const userTableBody = document.getElementById("userBody");

    // Fonction pour mettre à jour le tableau avec les données d'utilisateurs
    function updateTable() {
        fetch("utilisateur.json")
            .then(response => response.json())
            .then(data => {
                // Effacer le contenu actuel du tableau
                userTableBody.innerHTML = "";

                // Parcourir les données JSON et les ajouter au tableau
                data.forEach(user => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    `;
                    userTableBody.appendChild(row);
                });
            })
            .catch(error => console.error("Erreur lors de la récupération des utilisateurs:", error));
    }

    // Mettre à jour le tableau à intervalles réguliers (toutes les 5 secondes)
    setInterval(updateTable, 5000);

    // Appeler la fonction pour mettre à jour le tableau lors du chargement initial de la page
    updateTable();
});



