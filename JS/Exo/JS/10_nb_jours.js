// mon exo

var mois = Number(prompt("saisissez le numero d'un mois en chiffre, ex: 1 pour janvier?"));

if (mois === 1){
    document.write("janvier - 31 jours");
}else if (mois === 2){
    document.write("fevrier - 29 jours");
}else if (mois === 2) {
    document.write("fevrier - 29 jours");
}else if (mois === 3) {
    document.write("mars - 31 jours");
}else if (mois === 4) {
    document.write("avril - 30 jours");
}else if (mois === 5) {
    document.write("mai - 31 jours");
}else if (mois === 6) {
    document.write("juin - 30 jours");
}else if (mois === 7) {
    document.write("juillet - 31 jours");
}else if (mois === 8) {
    document.write("Aout - 31 jours");
}else if (mois === 9) {
    document.write("septembre - 30 jours");
}else if (mois === 10) {
    document.write("octabre - 31 jours");
}else if (mois === 11) {
    document.write("novembre - 30 jours");
}else if (mois === 12) {
    document.write("decembre - 31 jours");
}else{
    prompt("saisissez le numero d'un mois en chiffre, ex: 1 pour janvier?")
}

// correction de sandra


// var mois = parseInt(prompt("Quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));

// if (mois === 2) { // si on a choisi février => chiffre 2
//     document.write("Le mois numéro " + mois + " fait 28 jours.");
// } else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)) { // si on a choisi un mois qui fait 30 jours
//     document.write("Le mois numéro " + mois + " fait 30 jours.");
// } else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) { // si on a choisi un mois qui fait 31 jours
//     document.write("Le mois numéro " + mois + " fait 31 jours.");
// } else {
//     document.write("Votre choix " + mois + " n'est pas dans le calendrier.");
// }

