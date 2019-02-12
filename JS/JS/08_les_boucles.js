// alert("test");
/*  Les boucles permettent de repeter des action simplement et rapidement. Une boucle peut etre vue comme une version informatique de "copier N lignes" ou de faire "x fois quelquechose". Par exemple n JS on peut traduire "faire 5 pas vers l'est" avec cette boucle*/
// var pas;
// for(pas=0; pas<5;pas++){
//     // ceci sera executé 5 fois
//     // a chaque éxécution, la variable pas augmentera de 1
//     //  Lorsqu'elle sera arrivée a 5 la boucle se terminera.
//     console.log("faire un pas vers l'est");
// }
/* Il y'a differents types de boucles mais elles se ressemblent toutes au sens ou elles repetent une action un certain nombre de fois (ce nombre peut etre zero) Les differents types de boucles permettent d'utiliser differentes façons de commencer et de terminer une boucle. Chaque boucle pourra etre utilisée en fonction de la situation et du probleme que l'on cherche a résoudre.*/
/*----------- les Boucles ------------*/
//  ----La boucle FOR----------------
/*
for(3arguments)(L'objet argument est un objet, semblable a un tableau
correspondant aux arguments passés a une fonction){

}
*/ 

/* L'obet "argument" est une variable local (intrinseque et inherente aux fonctions) */

// 1. initialise un compteur a partir de combien je compte(par defaut le compteur est la variable'i')
// 2. la condition a verifier qui doit donc etre vrai (TRUE)
// 3.le "pas d'incrementation (combien j'ajoute a chaque tour, generalement 1 donc 1++")
// for(var i=1; i<=10;i+=2){
//     document.write("<p> Intruction executée: "+i+"</p>");
// }

// ---La boucle WHILE (tant que)
// tres utilisée quand on ne connait pas le nombre de tour de boucles à l'avance.
// var j=1;
// while (j<= 10){
//     document.write("<hr><p> Instrruction executée : "+j+"</p>");
// 50 lignes de code
// 

/*---Exercice---*/

// Jai 1000€ sur mon Compte 
// Chaque mois j'ajoute 50€
// combien de temps me faut il pour avoir 2000€ sur mon compte?

// var j = 1000;
// var j = j+50;
// while (j<= 2000){
//    document.write("<hr><p> Instrruction executée : "+j+"</p>");
//    console.log("nombre de mois");
// }

/*---correction---*/
var moncompte = 1000;
var temps = 0;
while(moncompte<2000){
    moncompte +=50;
    temps++;
}
document.write ("<h3> sous sur mon compte : " + moncompte + "</h3>");
document.write ("<h3> jusqu'a 2000€, il me faut:" + temps + "mois</h3>");
document.write ("<h3> jusqu'a 2000€, il me faut:" + (temps/12) + "année</h3>");

/*---correction avec la boucle FOR---*/

var tps = 0;
for (var mesSous = 1000; mesSous <2000; mesSous +=50){
    document.write("<h3> le mois suivant j'ai:" + mesSous + "</h3>");
    tps++;
}
document.write("<h3> il aura fallu:" + tps + "</h3>");