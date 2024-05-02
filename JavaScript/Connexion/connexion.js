import { validateConnexion } from "./validators/Identification.js";


let submit = document.getElementById("submit")


submit.addEventListener("click", function(event){
    event.preventDefault()

    let message = document.getElementById("message")

    if (validateConnexion()){
        console.log("La connexion à réussi.")
        message.classList.remove("error");

        window.location.href = "/Html/profil.html";

    }

    else {
        console.log("coucou ça ne marche pas")
        message.textContent = "Erreur de connexion."
        message.classList.add("error");
    }

});