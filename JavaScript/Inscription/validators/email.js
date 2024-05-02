/** VERIFICATION DE LA VALIDITE DE L'EMAIL **/
import { getUsers } from "../../storage/storageLS.js";

function validateEmail() {
    let inputMail = document.getElementById("mail");
    let messageMail = document.getElementById("messageMail");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let users = getUsers("users");

    if(inputMail.value.trim() === "") {
        messageMail.textContent = "Le mail utilisateur ne peut pas être vide."
        messageMail.classList.remove("valid");
        messageMail.classList.add("error");

    }
    else if (!emailRegex.test(inputMail.value.trim())) {
        messageMail.textContent = "Le mail utilisateur doit avoir le format 'test@email.fr'.";
        messageMail.classList.remove("valid");
        messageMail.classList.add("error");
    }

    else if (users.some(user => user.email === inputMail.value.trim())){
        messageMail.textContent = "Cet email est déjà utilisé.";
        messageMail.classList.remove("valid");
        messageMail.classList.add("error");
    }
    
    else {
        messageMail.textContent = "Valide"
        messageMail.classList.add("valid");
        messageMail.classList.remove("error");
        return true
    }

    return false
}

export {validateEmail}