import { getUser } from "../storage/storageSdS.js";

function inputInformation () {
    let userName = document.getElementById("userName");
    let userMail = document.getElementById("userMail");
    let user = getUser("user");

    userName.textContent = user.name;
    userMail.textContent = user.email;
}

inputInformation();

