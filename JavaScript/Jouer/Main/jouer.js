import { flipCard, reset } from "../Secondaire/flipMatch.js";

const memoryCards = document.querySelectorAll(".memory-card");

// Jouer la partie
memoryCards.forEach(card => card.addEventListener("click", flipCard));

// Play again
reset()

