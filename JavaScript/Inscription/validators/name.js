/** VERIFICATION DU NOM USER */

function validateName () {
    let inputName = document.getElementById("userName");
    let messageName = document.getElementById("messageName")


        if(inputName.value.trim() === "") {
            messageName.placeholder = "Le nom d'utilisateur ne peut pas être vide.";
            messageName.classList.remove("valid");
            messageName.classList.add("error");
        }
        else if (inputName.value.trim().length < 3) {
            messageName.placeholder = "Le nom d'utilisateur doit contenir au moins 3 caractères.";
            messageName.classList.remove("valid");
            messageName.classList.add("error");
        
        }
        else {
            
            messageName.placeholder = "Le nom d'utilisateur est correct.";
            messageName.classList.add("valid");
            messageName.classList.remove("error");
            return true
        }
    return false
}

export {validateName};