/** VERIFIE LA CORRESPONDANCE DU NAME AVEC LE LOCAL STORAGE **/

import { getUsers } from "../../storage/storageLS.js";
import { saveUser } from "../../storage/storageSdS.js";

function validateConnexion () {
    let inputName = document.getElementById("user");
    let inputMail = document.getElementById("user");
    let inputLog = document.getElementById("password");
    let users = getUsers("users");

    return users.some(user => {
        if (((user.name === inputName.value.trim()) || (user.email === inputMail.value.trim())) && (user.password === inputLog.value.trim())){
            saveUser("user", {
                "name": user.name,
                "email": user.email
            }) // stock les données de connexion dans le session storage.
            return true
        }
        return false
    }
    ) 
    // some >>> boucle qui vérifie un élément dans une liste
    // for each >>> impossible à utiliser car ne peut pas retourner.
} 


export {validateConnexion};