/** MELANGER LES CARTES DE FACON ALEATOIRE **/

import { doubleFront } from "./doublerCartes.js";

doubleFront.sort(() => Math.random() - 0.5);

export{doubleFront}