// var input = {
//     surname: document.getElementById("surname").value,
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
// };

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "cXnqxVDlJAqKAqKEo",
    });
})();

document.getElementById('submitBtn').addEventListener('click', ()=>{
    emailjs.send("service_f2eonwn", "template_25yozx9", 
        {
            surname: document.getElementById("surname").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }
    )
        .then((response) => {
            alert('top');
        });
})


// function sendMail() {
//     // Récupérer les valeurs des champs du formulaire
//     var input = {
//         surname: document.getElementById("surname").value,
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };

//     var messageBox = document.getElementById("successMessage");
//     var successMessage = document.getElementById("successTitle");
//     var messageAlert = document.getElementById("successP");

//     // Vérifier que les champs ne sont pas vides
//     if (!input.surName || !input.name || !input.email || !input.message) {
//         // alert("Veuillez remplir tous les champs.");
//         messageBox.style.display = "block";
//         successMessage.innerHTML = "Alert";
//         messageAlert.innerHTML = "Veuillez remplir tous les champs.";
//         setTimeout(() => {
//             messageBox.style.display = "none";
//         }, 3000);
//         return; // Arrêter la fonction si des champs sont vides
//     }

//     // Envoyer les données via emailjs
//     emailjs.send("service_f2eonwn", "template_25yozx9", input)
//         .then(function (response) {
//             // alert("Merci pour votre message ! Je reviendrai vers vous rapidement.");
//             messageBox.style.display = "block";
//             successMessage.innerHTML = "Succes";
//             messageAlert.innerHTML = "Message sent succesfuly";
//             setTimeout(() => {
//                 messageBox.style.display = "none";
//             }, 3000);
//             console.log("Email envoyé avec succès :", response);
//         })
//         .catch(function (error) {
//             // alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
//             messageBox.style.display = "block";
//             successMessage.innerHTML = "Ooops";
//             messageAlert.innerHTML = "Message non envoyé";
//             setTimeout(() => {
//                 messageBox.style.display = "none";
//             }, 3000);
//             console.error("Erreur :", error);
//         });
// }

// Ajouter un écouteur d'événement au bouton d'envoi
// document.getElementById("submitBtn").addEventListener('click', function (event) {
//     event.preventDefault(); // Empêcher le comportement par défaut (recharger la page)
//     sendMail(); // Appeler la fonction sendMail
// });