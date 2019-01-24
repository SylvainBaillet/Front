// function surfaceCercle(){

// var rayon;

// rayon = prompt("Quelle est le rayon de votre carcle?", "saisissez le rayon");
// var resultat = (rayon * rayon *Math.PI);
// alert("la surface est" + resultat);
// }

// corrigé de Sandra

function surfaceCercle() {
    var rayon = parseFloat (prompt("entrez le rayon du cercle:"));
    //parsefloat pour convertir un string en nombre 
    return Math.PI * rayon * rayon;
    // return ou alert donne la meme chose
}

