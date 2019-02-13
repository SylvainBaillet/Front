// alert("rg");
// var i = prompt("tentez de trouver l'un des chiffre gagnants");

// // var i=1
// while ((i >50) && (i < 100)){
//     location.reload;
// }
// var nb = prompt("tentez de trouver l'un des chiffre gagnants");
// if (nb >50 && nb <100){
//     document.white("bravo");
// }else{
//     prompt()
// }

// -----correction-------

var nb = 0;
// valeur initiale permettant d'entrer dans la boucle
while ((nb < 50) || (nb >100)) {
    nb = Number(prompt("entrez un nombre entre 50 et 100"));
}
