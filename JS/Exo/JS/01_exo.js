function surfaceRectangle(){

    var largeur;
    var longueur;

    largeur = prompt("Quelle est la largeur de votre rectangle?", "saisissez la largeur");
    longueur = prompt("Quelle est la longueur de votre rectangle?", "saisissez la longueur");
    alert(" La surface vaut " + longueur * largeur);
    alert(" Le perimetre vaut " + 2 * (number(longueur) + number(largeur)));
    
}
