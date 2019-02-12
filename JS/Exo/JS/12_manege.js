
// boucle while
var manege= 0;
while (manege < 10){
    manege++;
    document.write("c'est le tour numero" + manege + <br/> );
}
// boucle for
for (var i = 1; i<= 10 ; 1++ ){
    document.write("c'est le tourn numero: " + i + <br />);
}

document.write("<hr/>");
document.write("<hr/>");

// boucle while

var question = parseInt (prompt("combien de tours voulez vous?"));
var compteur = 1;
while (compteur <= question){
    document.write("c'est le tour numero" + compteur + <br />);
    compteur++;
}
document.write("<hr/>")

// 2 -- boucle FOR
var nbtours =parseInt(prompt("combien de tours a faire?"));
for (var tour = 1; tour<=nbtours; tour++){
    document.write("c'est le tour numero" + tour + <br />);
}