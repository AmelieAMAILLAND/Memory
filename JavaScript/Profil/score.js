import { getUsers} from "../storage/storageLS.js";


function tableauScore() {
    let userLogged = JSON.parse(sessionStorage.getItem("user"));
    let users = getUsers("users")
    let user = users.find(user => (user.name === userLogged.name) || (user.email === userLogged.email));

    let scores = user.score;

    //Trier les scores dans l'ordre croissant.
    scores.sort((a, b) => a - b);

    //Limiter le nombre de score affiché à 5.
    scores = scores.slice(0, 5);

    let tableauScore = document.querySelector(".tableauScore")
    let table = document.createElement("table") //création du tableau dans l'html.

    let headerRow = table.createTHead().insertRow();
        let headers = ["Vos 5 meilleurs scores"];
    headers.forEach(headerText => {
        let th = document.createElement("th")
        let texte = document.createTextNode(headerText);
        th.appendChild(texte);
        headerRow.appendChild(th);
    });

    //Remplir le tableau
    let tbody = table.createTBody();
    scores.forEach(score => {
        let row = tbody.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(score);
        cell.appendChild(text);
    });

    //Ajouter le tableau à la page
    tableauScore.appendChild(table);
}

export{tableauScore}

