import { saveScore } from "../../storage/storageLS.js";
import { doubleFront } from "./doublerCartes.js";
import { implementation } from "./implementationDOM.js";


implementation()

let lockBoard = false;
let notFoundPairs = 0;
let tentatives = 0;
let hasFlippedCard = false;
let firstCard, secondCard;
let foundPairs = 0;

const memoryCards = document.querySelectorAll(".memory-card");

function flipCard(){
    if (lockBoard) return;

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

function match () {
    if (firstCard.querySelector(".front-face").src === secondCard.querySelector(".front-face").src) {
        // Correspondance trouvée
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        foundPairs = foundPairs + 1
        

    // Vérifier si toutes les paires sont trouvées
        if (foundPairs === 2) {
            tentatives = foundPairs + notFoundPairs
            
            saveScore("users", tentatives)

            setTimeout(() => {
                alert ("Bravo, vous avez gagné en " + tentatives + " tentatives.")
            }, 1000);
            
        }
    }

    else {
        // Pas de correspondance
        lockBoard = true; // Verrouiller le tableau pendant la vérification
        notFoundPairs = notFoundPairs + 1;
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            lockBoard = false; // Déverrouiller le tableau après avoir retourné les cartes
        }, 2000);
    }
}

function reset() {
    document.addEventListener("keydown", function(event){

    // Est-ce la barre d'espace est pressée ? 
    if (event.code === "Space") {

        if (foundPairs >= 1) {
        //Retourner toutes les paires trouvées
        memoryCards.forEach(card => card.classList.remove("flip"));

        // Réinitialiser le compteur à 0
        foundPairs = 0;

        setTimeout(() => {
            // Mélanger les cartes
            doubleFront.sort(() => Math.random() - 0.5);

            // Remplacer les élements
            memoryCards.forEach((card, index) => {
            card.querySelector(".front-face").src = doubleFront[index];
            });
        }, 1000);

        // Reboucler
        memoryCards.forEach(card => card.addEventListener("click", flipCard));
        
        }
    }
})

}


export{flipCard, reset, saveScore}