import { getUser } from "../storage/storageSdS.js";
import { tableauScore } from "../Profil/score.js";

function inputInformation () {
    let userName = document.getElementById("userName");
    let userMail = document.getElementById("userMail");
    let user = getUser("user");

    userName.textContent = user.name;
    userMail.textContent = user.email;
}

inputInformation();
tableauScore()
