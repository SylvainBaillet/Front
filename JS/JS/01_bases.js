// synthaxe de base
// commentaire sur une seule ligne
/*
ici, je fais un commentaire
sur plusieurs lignes*/

//-- 1: déclarer une variable en JS 
// var Prenom; (une instruction js se termine toujours par un ; aussi il est possible de mettre plusieurs instruction en une seule ligne)
//-- 2: Affecter une valeur à une variable.
// Prenom = "Sylvain";
// var Prenom ="Sylvain";
// inst_1;
// inst_2; inst_3;
// --4: Afficher une boite de dialogue (2 façons)
// alert("super, tu es arrivé sur mon site");
// window.alert("Super, tu es encore arrivé sur mon site");
// --5: Afficher dans la console (ici, la valeur de ma variable
// Prenom)
// console.log("Sylvain");
// document.write("a la pause vous aurez des haribos pik");
// --7: demander à l'utilisateur une valeur (2 façons)
// window.prompt ("question: quel jour sommes nous?", "jour de la semaine");
prompt("question: quel jour sommes nous?", "jour de la semaine");
// --- > et pour manipuler cette valeur, je n'oublie pas de la
// stocker.
// var jour = prompt("question: Quel jour sommes nous?", "jour de la semaine");
// console.log(jour);
// --8: Attention /!\ Le JS est sensible a la casse 'case sensitive'
// mavariable -/- maVarible -/- ma_variable
//                camel case    snake case
// --9: une variable ne peut pas commencer par un chiffre, elle ne doit contenir que des caractères ALPHANUMERIQUES, et ne peut pas être un mot réservé (par exemple var, for ... des éléments natifs du language JS)

// --10: Une variable peut être declaréé de façon explicite:
// var fruit; 
// var fruit ="fraise";
// ou implicite
// var fruit_2 ="coco";
// haribo = "tagada";~
/*
~~~~~~~~~~~~~~~~~~Les types de variables~~~~~~~~~~~~~~~~
*/
//  --1: Chaine de caractéres (string)
// L'objetglobal "string" est un constructeur de chaine de caracteres.
// var vacances = "2017";
// var destination = "Australie";
// --2: Un nombre entier (integer ou int)
// var année= 2017
// --3: un nombre decimal (float)
//  var nombre_a_virgule= -5.32;
// --4: un Booléen (boolean = VRAI/FAUX = TRUE/FALSE)
// L'objet BOOLEAN est un objet permettant de representer une valeur Booléenne.
// var unBooleen = false;// --TRUE 
// --5: Les constantes
/* La declaration de const permet de creér une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut être modifiée par réffraction plus bas dans le code.
Une constante ne peut pas être declarée à nouveau dans le même script*/
// par CONVENTION les constantes sont en MAJUSCULES 
const PAYS = "France";
// string
const AN = '2020';
// string
const BIRTH = 2020;
// nombre
// --6 TYPEOF permet de connaitre le type de ma VARIABLE
console.log('vacances');
console.log (typeof "vacances");
console.log('annee');
console.log (typeof 2019);
// En JS les variables sont auto-typées
// on peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
// -- La fonction parseInt() renvoie un entier à partir d'une chaine de caracteres.( la fonction parseInt analyse une chaine de caracteres fournie en arguments et renvoie un entier dans une base de données)
var unChiffre ="12";
console.log(unChiffre);
console.log(typeof "unChiffre");
// STRING => NUMBER
unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);
// Je ré affecte une valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);
// String => FLOAT
/* la fonction parseFloat permet de transformer une chaine de caracteres en un nombre flottant apres avoir analysé celle-ci (parsing) */
/* Un nombre flottant obtenu à partir de l'analyse de la chaine de caracteres. Si le premier caractere ne permet pas d'obtenir un nombre, ce sera lavaleur NAN qui sera renvoyée.*/

unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER => STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);
/* la methode toString() en JS permet de donner un aperçu d'un objet instancié. c'est à dire que cette methode va retourner une chaine de caracteres reperesentant son objet: affichange de la valeur des propriétés par exemple*/ 

