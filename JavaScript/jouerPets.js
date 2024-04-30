//Initialise les variables.
const memoryGame = document.querySelector(".memory-game");
const BackCards = "/Ressources/Game/Pets/Back-face/paw-solid.svg";
const frontCards = [
    "/Ressources/Game/Pets/Front-face/1.jpg",
    "/Ressources/Game/Pets/Front-face/2.jpg",
    "/Ressources/Game/Pets/Front-face/3.jpg",
    "/Ressources/Game/Pets/Front-face/4.jpg",
    "/Ressources/Game/Pets/Front-face/5.jpg",
    "/Ressources/Game/Pets/Front-face/6.jpg",
    "/Ressources/Game/Pets/Front-face/7.jpg",
    "/Ressources/Game/Pets/Front-face/8.jpg",
    "/Ressources/Game/Pets/Front-face/9.jpg",
    "/Ressources/Game/Pets/Front-face/10.jpg"
];

// Doubler les cartes front
let doubleFront = frontCards.concat(frontCards); // concat fusionne les tableaux pour doubler les cartes.

// Fonction qui mélange les cartes.
doubleFront.sort(() => Math.random() - 0.5);

//implémenter
doubleFront.forEach(image => {
    const memoryCard = document.createElement("div");
    memoryCard.classList.add("memory-card");
    memoryGame.appendChild(memoryCard); // Ajoute la div à la section.

    const frontFace = document.createElement("img");
    frontFace.src = image;
    frontFace.alt = "Front face";
    frontFace.classList.add("front-face");
    memoryCard.appendChild(frontFace); // Ajoute les images front à la classe memory-card

    const backFace = document.createElement("img");
    backFace.src = BackCards;
    backFace.alt = "Back face";
    backFace.classList.add("back-face");
    memoryCard.appendChild(backFace); // Ajoute l'image back à la classe memory-card
})

const memoryCards = document.querySelectorAll(".memory-card");
console.log(memoryCards)

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let foundPairs = 0;

function flipCard(){
    if (lockBoard) return; // Ne rien faire si le tableau est verrouillé

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } 
    else {
        hasFlippedCard = false;
        secondCard = this;

        match();
    }
};

// Fonction qui vérifie la correspondance des cartes.
function match() {
    if (firstCard.querySelector(".front-face").src === secondCard.querySelector(".front-face").src) {
        // Correspondance trouvée
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        foundPairs = foundPairs + 1

        // Vérifier si toutes les paires sont trouvées
        if (foundPairs === doubleFront.length/2) {
            alert ("Vous avez gagné.")
        }

    } 
    else {
        // Pas de correspondance
        lockBoard = true; // Verrouiller le tableau pendant la vérification
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            lockBoard = false; // Déverrouiller le tableau après avoir retourné les cartes
        }, 1000);
    }
}

// Retourne et vérifie les cartes 
memoryCards.forEach(card => card.addEventListener("click", flipCard))


/***
 *  A Faire > Réussir à reset le jeu avec le bouton reset
 * const reset = document.getElementById("reset");
 * 
 * A Faire > optimiser avec des fonctions si possible (à réfléchir)
 * 
 * A Faire > séparer l'init des cartes dans un fichier exprès pour ça.
 * 
 * A Faire > mettre en place un fichier de lancement de jeu séparé qui reprendra l'init et les fonctions du jeu.
 * 
 * Objectif : mieux structurer le code et le rendre plus claire.
 ***/