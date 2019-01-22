// alert("coucou");
/* -------------------------
La CONCATENATION
--------------------------- */
// Concatener signifie mettre bout a bout deux chaines de cazracteres afin d'en former une troisieme, nouvelle. Concatener c'est donc additionner des chaines de caracteres. En Javascript, on va pouvoir concatener grace à l'operateur << + >> .
var annee = 2017;
var futur = 3;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + "<br>");

var mois = "7";
var calcul2 = annee + " " + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

var DebutPhrase = "Aujourd'hui";
var NbStagiaires = 9;
var SuitePhrase = "stagiaires";
var FinPhrase = "sonts présents";
// afficher la phrase en un seul morceau avec la concaténation, a vous de jouer!
var phrase = DebutPhrase + " " + NbStagiaires + " " + SuitePhrase + " " + FinPhrase;
console.log (phrase);
document.write(phrase);
