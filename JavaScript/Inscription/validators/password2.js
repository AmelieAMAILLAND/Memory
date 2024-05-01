/** CONFIRMATION DU MOT DE PASSE *  CONFIRMATION DU MOT DE PASSE **/ 

function confirmedPassword () {
    let inputLog2 = document.getElementById("password2");
    let messagePassword2 = document.getElementById("messagePassword2");
    let inputLog = document.getElementById("password");
        
    if (inputLog2.value.trim() === inputLog.value.trim()) {
        messagePassword2.placeholder = "Les mots de passes sont identiques";
        messagePassword2.classList.add("valid");
        messagePassword2.classList.remove("error");
        return true       
    }
    else {
        messagePassword2.placeholder = "Les mots de passe ne sont pas identiques.";
        messagePassword2.classList.remove("valid");
        messagePassword2.classList.add("error");
        return false
    }
}

export {confirmedPassword}