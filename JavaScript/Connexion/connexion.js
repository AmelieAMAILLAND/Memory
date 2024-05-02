import { validateConnexion } from "./validators/Identification.js";

let submit = document.getElementById("submit")



submit.addEventListener("click", function(event){
    event.preventDefault()

    let message = document.getElementById("message")

    if (validateConnexion()){
        
        message.classList.remove("error");

        window.location.href = "/Html/profil.html";

    }

    else {
        message.textContent = "Erreur de connexion."
        message.classList.add("error");
    }

});