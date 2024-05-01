import { validateName } from "./validators/name.js";
import { validateEmail } from "./validators/email.js";
import { validatePassword } from "./validators/password.js";
import { confirmedPassword } from "./validators/password2.js";
import { getUsers, saveUser } from "./storage/storageLS.js";

let btnSubmit = document.querySelector(".btn");
let inputName = document.getElementById("userName");
let inputMail = document.getElementById("mail");
let inputLog = document.getElementById("password");
let inputLog2 = document.getElementById("password2");

inputName.oninput = function(){
    validateName()
} // change le message d'erreur >>> oninput

inputMail.oninput = function(){
    validateEmail()
} // change le message d'erreur >>> oninput

inputLog.oninput = function(){
    validatePassword()
} // change le message d'erreur >>> oninput

inputLog2.oninput = function(){
    confirmedPassword()
} // change le message d'erreur >>> oninput

btnSubmit.addEventListener("click", function(){
    if (validateName() && validateEmail() && validatePassword() && confirmedPassword()) {
        let user = {
            name: document.getElementById("userName").value,
            email: document.getElementById("mail").value,
            password: document.getElementById("passWord").value
        }

        saveUser("users", user);
        getUsers("user")
    }

});
