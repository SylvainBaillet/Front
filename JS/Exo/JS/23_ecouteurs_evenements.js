// alert("dfj");
/* *******************************1 -VARIABLES******************************* */
// Recherche du bouton dans l'arbre DOM
// Le DOM .Document Object Model est une interface de programmation d'application
// (API) pour des documents HTML valides et XML bien formés. Il definit la structure logique d'un document. (au sens large du terme) et la maniere d'y acceder et de le manipuler.
var bouton = document.getElementById('toggle.rectangle');
// Recherche du rectangle dans l'arbre DOM
var rectangle= document.querySelector('.rectangle'); 

/* ************************2- FONCTIONS********************************** */
/*
1 - Fonction au click sur le bouton
 */ 
// La methode .toggle() va ajouter ou supprimer la class (tel un interrupteur)
function surClicBouton(){
    rectangle.classList.toggle('hide');
}
/* 
2 - fonction au double clic sur le rectangle 
*/
function auDoubleClicRectangle(){
    rectangle.classList.toggle('good');
} 
/*
3 - A l'entrée du survol du rectangle
*/
// La methode .add() va ajouter la class CSS.
function auSurvolSourisRectangle(){
    rectangle.classList.add('important');
}
/*
4 - La methode .remove() va ajouter la class CSS.
*/
function aSortieSourisRectangle(){
    rectangle.classlist.remove('good');
    rectangle.classlist.remove('important');
}
/* ************************3- ECOUTEURS D'EVENEMENTS********************************** */
/* ************************- parametre: l'évenement********************************** */
/* ************************- 2 eme parametre: la fonction a executer********************************** */
// 1- Installation d'un gestionnaire devenement au clic sur le bouton
bouton.addEventListener('click',surClicBouton);
/* La methode "addEventListener()" met en place une fonction a appeller chaque fois que l'evenement specifié est remis a la cible. Les cibles courantes sont un "Element", le "Document" lui meme est une "window", mais elle peut etre tout objet prenant en charge les evenements (comme XMLHLtpRequest) */
// 2-Installation d'un gestionnaire d'evenement au double clic sur le recltangle
rectangle.addEventListener('dblclick',auDoubleClicRectangle);
// * 3 - Installation d'un gestionnaire d'evenement au survol sur le rectangle.* /
rectangle.addEventListener('mouseover', auSurvolSourisRectangle);
// * 4 - Installation d'un gestionnaire d'evenement a la sortie du survol sur le rectangle * /
rectangle.addEventListener('mouseout', aSortieSourisRectangle);



