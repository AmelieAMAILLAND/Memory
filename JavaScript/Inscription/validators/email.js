/** VERIFICATION DE LA VALIDITE DE L'EMAIL **/

function validateEmail() {
    let inputMail = document.getElementById("mail");
    let messageMail = document.getElementById("messageMail");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(inputMail.value.trim() === "") {
        messageMail.placeholder = "Le mail utilisateur ne peut pas être vide."
        messageMail.classList.remove("valid");
        messageMail.classList.add("error");

    }
    else if (!emailRegex.test(inputMail.value.trim())) {
        messageMail.placeholder = "Le mail utilisateur doit avoir le format 'test@email.fr'.";
        messageMail.classList.remove("valid");
        messageMail.classList.add("error");
    }
    else {
        messageMail.placeholder = "Le mail est correct."
        messageMail.classList.add("valid");
        messageMail.classList.remove("error");
        return true
    }

    return false
}

export {validateEmail}