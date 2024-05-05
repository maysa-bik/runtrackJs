$(document).ready(function() {
    // Validation du formulaire d'inscription
    $('#inscriptionForm').submit(function(event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

        // Réinitialiser les messages d'erreur
        $('.error').text('');

        // Récupérer les valeurs des champs
        var nom = $('#nom').val().trim();
        var prenom = $('#prenom').val().trim();
        var email = $('#email').val().trim();
        var password = $('#password').val();
        var adresse = $('#adresse').val().trim();
        var codePostal = $('#codePostal').val().trim();

        var isValid = true;

        // Validation des champs obligatoires
        if (nom.trim() === '') {
            $('#nomError').text('Veuillez saisir votre nom.');
            isValid = false;
        }

        if (prenom.trim() === '') {
            $('#prenomError').text('Veuillez saisir votre prénom.');
            isValid = false;
        }

        if (email.trim() === '') {
            $('#emailError').text('Veuillez saisir votre adresse email.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#emailError').text('Veuillez saisir une adresse email valide.');
            isValid = false;
        }

        if (password.trim() === '') {
            $('#passwordError').text('Veuillez saisir votre mot de passe.');
            isValid = false;
        } else if (password.length < 6) {
            $('#passwordError').text('Le mot de passe doit contenir au moins 6 caractères.');
            isValid = false;
        }

        // Afficher un message d'erreur si le code postal n'est pas un nombre
        if (codePostal.trim() !== '') {
            $('#codePostalError').text('Le code postal doit être un nombre.');
            isValid = false;
        } else if (isNaN(codePostal)) { 
            $('#codePostalError').text('Le code postal doit être un nombre.');
            isValid = false;
        }

        // Si le formulaire est valide, vous pouvez soumettre les données au serveur
        if (isValid) {
            alert('Formulaire d\'inscription valide, envoi des données au serveur.');
            // Vous pouvez soumettre le formulaire ici ou effectuer d'autres actions nécessaires
        }
    });

    // Validation du formulaire de connexion
    $('#connexionForm').submit(function(event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

        // Récupérer les valeurs des champs
        var email = $('#email').val();
        var password = $('#password').val();

        // Validation des champs obligatoires
        if (email === 'maysa.bik@laplateforme.io' && password === 'MAYSAbik123') {
            // Afficher un message de connexion réussie
            alert('Connexion réussie !');
        } else {
            // Afficher un message d'erreur si les informations de connexion sont incorrectes
            alert('Erreur : Adresse email ou mot de passe incorrect.');
        
        }
    });
});
// Fonction de validation d'email simple
function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


