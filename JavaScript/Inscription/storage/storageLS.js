
/** MANIPULATION DES DONNEES DU LOCAL STORAGE **/

function saveUser(key, user) {
    let users = getUsers(key); //Récupère les utilisateurs existants.
    users.push(user); //Ajouter le nouvel utilisateur.
    localStorage.setItem(key, JSON.stringify(user)); //Stock le tableau dans le localStorage
}

function getUsers(key) {
    let datasLocalStorage = localStorage.getItem(key); //Récupère les données depuis le local Storage.
    if (datasLocalStorage) {
        return JSON.parse(datasLocalStorage); // Si les données existent, les renvoi
    }
    else {
        return [] // Sinon, renvoi un tableau vide.
    }
    
}

export {saveUser, getUsers} //Exporte les fonctions pour une utilisation dans un autre fichier.