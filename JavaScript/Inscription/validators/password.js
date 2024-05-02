/** VALIDATION DU MOT DE PASSE **/

function validatePassword() {
    let inputLog = document.getElementById("password");
    let messagePassword = document.getElementById("messagePassword");

    if(inputLog.value.trim() === "") {
        messagePassword.textContent = "Le mot de passe utilisateur ne peut pas être vide.";
        messagePassword.classList.remove("valid");
        messagePassword.classList.add("error");
    } 
    else if(inputLog.value.trim().length < 6) {
        messagePassword.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        messagePassword.classList.remove("valid");
        messagePassword.classList.add("error");
    } 
    else if(!/\d/.test(inputLog.value.trim())) {
        messagePassword.textContent = "Le mot de passe doit contenir au moins un chiffre.";
        messagePassword.classList.remove("valid");
        messagePassword.classList.add("error");
    } 
    else if(!/[a-z]/.test(inputLog.value.trim()) || !/[A-Z]/.test(password)) {
        messagePassword.textContent = "Le mot de passe doit contenir au moins une lettre majuscule et une lettre minuscule.";
        messagePassword.classList.remove("valid");
        messagePassword.classList.add("error");
    } 
    else if(!/[!@#$%^&*]/.test(inputLog.value.trim())) {
        messagePassword.textContent = "Le mot de passe doit contenir au moins un caractère spécial parmi !@#$%^&*.";
        messagePassword.classList.remove("valid");
        messagePassword.classList.add("error");
    } 
    else {
        messagePassword.textContent = "Le mot de passe est fort";
        messagePassword.classList.add("valid");
        messagePassword.classList.remove("error");
        return true
    }

    return false
}

export {validatePassword};