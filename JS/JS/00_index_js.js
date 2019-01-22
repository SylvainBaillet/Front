// alert('JS Okay') ; Pour verifier que mon fichier JS est bien relié à mon HTML.

// Syntaxe de base

// deux slash pour lui faire un commentaire uniligne

/* 
ici je peux faire un commentaire
sur plusieurs lignes
 */

// --  1: Déclaration d'une variable en JS
var Prenom;

//  -- 2: Affecter une valeur
var prenom = "Sylvain";

//  -- 3: Une instruction se termine TOUJOURS par un point virgule, aussi il est possible d'écrire plusieurs instructions sur une seule ligne
var instruction_1;
var instruction_2, intruction_3;

//  -- 4: Afficher une boite de dialogue (2 façons)
alert("WOW ! tu es sur ma page !");
window.alert("WOW ! tu es sur ma page !");

//  -- 5: Afficher dans la console (ici, la valeur de ma variable prenom)
console.log(prenom);

//  --6: Afficher du texte dans une page web
document.write("Bonjour à tous !");

// -- 7 : Demander à l'utilisateur une valeur (2 façons):
var retournerValeur = window.prompt("question: on est quel jour?", "saisissez la journée de la semaine");
var retournerValeur = prompt("question: on est quel jour?", "saisissez la journée de la semaine");

// -- 8 : Attention le JS est sensible à la casse (case sensitive)
// mavariable=/=maVariable 
// --attention aux min et maj

// -- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caracteres alphanumeriques, et ne peut être un mot reservé (var, for ... des éléments natifs du languages JS)
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

// -- 10 : Une variable peut être declarée de façon explicite :
var prenom = "Sylvain";
// -- ou implicite:
prenom = "Sylvain";

// -- 1. Chaine de caractere (string)
var vacances = "2017";
var destination = "Guadaljara";

// --2. Un nombre entier (integer)
var année = "2017";

// --3. Un nombre decimal (float)
var nombre_a_virgule = -5.32;

// --4. Un boolean  (boolean = VRAI/FAUX = TRUE/FALSE)
var unBoolean = false; //--true

// --5 Les constante
//  la declaration const permet de creer une constante accessible uniquement en lecture. contrairement à une variable? sa valeur ne peut etre modifiée par raffraction plus bas dans le code. Une contante ne peut pas être declarée à nouveau dans le même scipte.

// Par convention les constantes sont en majuscules
const PAYS = "France";

console.log(typeof "2017");

/* ===================================================================================

                                   INTRO JS & Algo

======================================================================================

                                   LA CONCATENATION
                    (Ajout d'éléments les uns à la suite des autres)                       

======================================================================================*/

var x = "Sylvain ";

console.log('bonjour' + x +' comment allez vous?');

// 1er exemple
var annee = 2017;
var mois = 3;
var calcul = annee + '/' + mois;
console.log(calcul);
document.write(calcul + "<br>"); 

// Je reaffecte une valeur à ma variable mois
mois = "7";
var calcul = année + '/' + mois;
console.log(calcul);
document.write(calcul + "<br>");

// 2eme exemple
var DebutDePhrase = "Aujourd'hui ";
var NombreDeStagiaires = " 9 ";
var SuiteDePhrase = " stagiaires ";
var FinDePhrase = " sont presents.<br>";

// Nous souhaitons maintenant, grace à la concaténation, afficher tout ce petit monde, en un seul morceau!
document.write(DebutDePhrase + NombreDeStagiaires + SuiteDePhrase + FinDePhrase);

//Exercice : creez une concatenation a partir des éléments suivants:

var phrase1 = " Je m'appelle ";
var phrase2 = " Sandra et j'ai ";
var age = " 375 ";
var phrase3 = " ans ! ";
var calcul = phrase1 + phrase2 + age + phrase3;
// ici la variable calcul devient le resultat des 4 variables precedentes, je n'ai plus qu'a mettre le nom de ma variable calcul pour que les differentes valeurs s'ecrivent dans la console ou sur le navigateur  
console.log(calcul);
document.write(calcul);

/* ===================================================================================

                                 LES OPERATEURS ARITHMETIQUES

======================================================================================*/

// ########## L'addition #############
// ------Declaration de plusieurs variable à la suite
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// addition
resultat = nb1 + nb2;

// Affichage du resultat dans la console
console.log(resultat);

// ########### La soustraction##########
resultat = nb1 - nb2;

// affichage du resultat dans la console
console.log(resultat);

// ########### La Multiplicaction##########
resultat = nb1 * nb2;

// affichage du resultat dans la console
console.log(resultat);

// ########### La Soustraction##########
resultat = nb1 / nb2;

// affichage du resultat dans la console
console.log(resultat);

// ########### La Modulo ##########
// --NB: Le Modulo retourne le reste d'une division
nb1 = 11;
// Le Modulo du nb1 & nb2 avec l'operateur "%"
resultat = nb1 % nb2;

// affichage du resultat dans la console
console.log(resultat);

// ==========================================================================LES ECRITURES SIMPLIFIEES=============================================================================

nb1 = 15;
nb1 = nb1 = 5;
console.log(nb1);

nb1 + 5; 
// ce qui equivaut à ecrire nb1 = nb1 + 5;
// ici, j'ai icrémenté et réaffecté
console.log(nb1);

// Je peux proceder de la meme maniere pour les autres opérateurs arithmetiques: "+" "-" "*" "/" "%"

// =========================================================================INCREMENTATIONS & DECREMENTATIONS=======================================================================
var nb1 = 1;
nb1 = nb1 +1;

// resultat dans la console
console.log(nb1);

// ecriture simplifiée
nb1--
console.log(nb1);

// ====================================================================LES CONDITIONS===============================================================================================

var MajoriteFR = 18;

if(MajoriteFR >= 18){
    alert("Bienvenue!");// si ma condition est vraie (boolean = TRUE/VRAI)    
} else{
    alert("allez voir ailleurs !");// sinon => ma condition est fausse (boolean = FALSE/FAUX)
}

// Exercice: creez une fonction permettant de verifier l'age d'un visiteur, s'il a la majorité, alors je lui souhaite la bienvenue, sinon, je fais une redirection sur google apres lui avoir signalé le soucis.

var age = window.prompt("question: quel est ton age?", "saisissez votre age");

if (age >= 18){
    alert(" bienvenue");
}else{
    window.location.replace("https://www.darty.com/"); // lien de redirection que l'on veut ou "document.location.href"
}






                                  











