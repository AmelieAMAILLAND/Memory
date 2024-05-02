/** VERIFICATION DU NOM USER */
import { getUsers } from "../../storage/storageLS.js";

function validateName () {
    let inputName = document.getElementById("userName");
    let messageName = document.getElementById("messageName");
    let users = getUsers("users");


        if(inputName.value.trim() === "") {
            inputName.textContent = "Le nom d'utilisateur ne peut pas être vide.";
            messageName.classList.remove("valid");
            messageName.classList.add("error");
        }
        else if (inputName.value.trim().length < 3) {
            messageName.textContent = "Le nom d'utilisateur doit contenir au moins 3 caractères.";
            messageName.classList.remove("valid");
            messageName.classList.add("error");
        
        }

        else if (users.some(user => user.name === inputName.value.trim())){
            messageName.textContent = "Cet nom d'utilisateur est déjà pris";
            messageName.classList.remove("valid");
            messageName.classList.add("error");
        }

        else {
            
            messageName.textContent = "Valide";
            messageName.classList.add("valid");
            messageName.classList.remove("error");
            return true
        }
    return false
}

export {validateName};