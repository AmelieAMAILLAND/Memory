/** MANIPULATION DE LA SESSION DE STOCKAGE **/

function saveUser(key, user) {
    sessionStorage.setItem(key, JSON.stringify(user));
     //Stock le tableau dans le localStorage
}

function getUser(key) {
    let datasSessionStorage = sessionStorage.getItem(key); //Récupère les données depuis le local Storage.
    if (datasSessionStorage) {
        return JSON.parse(datasSessionStorage); // Si les données existent, les renvoi
    }
    else {
        return {} // Sinon, renvoi un tableau vide.
    }
    
}

export {saveUser, getUser} //Exporte les fonctions pour une utilisation dans un autre fichier.