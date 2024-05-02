/** METTRE LES CARTES DANS LE DOM DE FACON DYNAMIQUE **/

import { back } from "../setCartes/back.js";
import { doubleFront } from "./melangerCartes.js";


function implementation() {
    const memoryGame = document.querySelector(".memory-game");

    doubleFront.forEach(image => {
        const memoryCard = document.createElement("div");
        memoryCard.classList.add("memory-card");
        memoryGame.appendChild(memoryCard); // Ajoute la div à la section.

        let frontFace = document.createElement("img");
        frontFace.src = image;
        frontFace.alt = "Front face";
        frontFace.classList.add("front-face");
        memoryCard.appendChild(frontFace); // Ajoute les images front à la classe memory-card

        const backFace = document.createElement("img");
        backFace.src = back;
        backFace.alt = "Back face";
        backFace.classList.add("back-face");
        memoryCard.appendChild(backFace); // Ajoute l'image back à la classe memory-card
})

}

export{implementation}


