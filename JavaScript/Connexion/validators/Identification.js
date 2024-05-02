/** VERIFIE LA CORRESPONDANCE DU NAME AVEC LE LOCAL STORAGE **/

import { getUsers } from "../../storage/storageLS.js";

function validateConnexion () {
    let inputName = document.getElementById("user");
    let inputMail = document.getElementById("user");
    let inputLog = document.getElementById("password");
    let users = getUsers("users");

    return users.some(user => ((user.name === inputName.value.trim()) || (user.mail === inputMail.value.trim())) && (user.password === inputLog.value.trim())) 
    // some >>> boucle qui vérifie un élément dans une liste
    // for each >>> impossible à utiliser car ne peut pas retourner.
} 


export {validateConnexion};