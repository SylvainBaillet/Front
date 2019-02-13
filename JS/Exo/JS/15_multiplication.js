// alert("gh");
// function table_multiplication(nombre){ 
//     var i; 
//     for (i = 1; i <= 10; i++) { resultat = nombre * i; 
//     document.write(nombre + " x " + i + "=" + nombre * i + "<br>"); 
//     } }
//     nombre=prompt("Entrez le numéro de la table:","Saisir un entier ici"); 
//     table_multiplication(nombre);

var choix = prompt ("Choisis un nombre :");
if ((choix >= 2) && (choix<=9)){
    for(var i=1; i<=10; i++){
        var res = choix*i;
        document.write(choix +"x"+ i +"+"+ res +"<br/>");
    }
}else{
    document.write("<h4>Le chiffre doit etre entre 2 et 9! </h4>")
}