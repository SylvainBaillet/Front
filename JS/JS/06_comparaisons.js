/* javaScript fournit trois opérations permettant de comparer des valeurs:
=> L'égalité strict ( ou identité ou "triple egal") utilisant "===",
=> L'egalité faible (ou "double égal") utilisant "=="
=>Object.is()(ajouté avec ECMAScript 2015)*/
// L'operateur de comparaison == signifie 'egal à'
//  il permet de verifier que les valeurs de 2 variables
// var nb1 = 123;
// var nb2 = 123;
// console.log (nb1 == nb2); // retourne "TRUE" dans la console
/*  L'operateur de comparaison === signifie 'strictement égal à' il permet de verifier la VALEUR et le type*/
// console.log (nb1 === nb2); // retourne "TRUE" dans la console
/* L'operateur "!=" signifie 'different de ... en VALEUR'*/
// console.log(nb1 != nb2);// reoutre FALSE dans la console
/*L'operateur !== signifie 'strictement different de ....'en VALEUR et en TYPE */
// console.log(nb1 §== nb2);// retourne FALSE dans la console

/*------EXERCICE----------- */

/* J'arrive sur un espace securisé au moyen du prenom et de l'age, je dois saisir mon prenom et mon age pour etre authentifié sur le site ( les infos sont en BDD, ici dans mes variables prenom et ages)
En cas d'echecs, une alerte m'informe du probleme.
Si tout se passe bien , un message de bienvenue m'accueille*/

//-----Mon exo

// var prenom = "sylvain";
// var age = "38";

// var retournerprenom = prompt("Renseignez votre prenom?");
// if (prenom === retournerprenom){
//  }
// var retournerage = prompt("Renseignez votre age?");
// if (age === retournerage){ 
//     alert("bienvenue " + prenom);      
// }else{
//     alert("erreur mauvaises informations");
//     window.location.replace("https://www.darty.com/");
// }

// ----fin de mon exo
    

var prenom, monAge;
prenom = "sylvain";
monAge = 38;
mdp = "motdepasse";

var prenomLogin = prompt("Quel est votre prénom ?");
var ageLogin = parseInt(prompt("Votre âge ?"));
var mdpLogin = prompt("Le mot de passe ?")
if (prenomLogin === prenom) {
    if (ageLogin === monAge) {
        if (mdpLogin === mdp) {
            alert("Bienvenue " + prenomLogin);
        } else {
            alert("Pb de mot de passe !");
        }
    } else {
        alert("Erreur d'âge");
    }
} else {
    alert("Attention, prénom non reconnu");
}





