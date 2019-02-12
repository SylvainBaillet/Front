// toutes les variables demandée dans une boite de dialogue différentes
var heure = prompt("entrez une heure");
var minutes = prompt("entrez les minutes");
var secondes = prompt("entrez les secondes");
// si la var heure est entre 0 et 23 , = "egale" , > "superieur" , < "inferieur"
if (heure => 0 && heure <= 23 && minutes >= 0 && minutes <= 59 && secondes >= 0 && secondes <= 59) {
    secondes++;
    //  on incrémente les secondes (secondes++)
    if (secondes === 60) {//on met les secondes à 0 et on passe à l'heure suivante.
        secondes = 0;
        minutes++;//  on incrémente les minutes( minutes++)
        if (minutes === 60) {
            minutes = 0;
            heure++;
            if (heure === 24) {
                heure = 0;
            }
        }
    }
    // affichage de l'heure
    document.write("<h3>dans une seconde il sera " + heure + " H " + minutes + " min " + secondes + " sec ")
}
else {
    //  else = sinon
    //  alert = ouvre une boite de dialogue si les valeur ne sont pas correctes
    alert("la valeur indiquée n'est pas valide");
}

