// alert("javaScript")
/* L'instruction "if" execute une instruction si une condition donnée est vrai. Si la condition n'est pas verifiée, il est possible d'utiliser une autre instruction.*/
/* --------- STRUCTURE DE BASE IF------------*/
// if(true){/* par defaut la condition à verifier le "if" verifie si elle est vraie*/

// }
// var nb1 = 10;
// if (nb1 <50){
//     console.log("nb1 est bien inferieur a 50");
// }
// if(true){
//     /*---le code---- si c'est vrai----*/
// }
// else{
//     /*------ le code si c'est faux----*/
// }
// if(nb1 >50){
//     console.log("nb1 est bien inferieur a 50");
// }else{
//     console.log("nb1 n'est pas inferieur à 50");
// }


/* EXERCICE, 
on untilise le if pour verifier l'age de l'internante.
=> si il est majeur, je lui souhaite la bienvenue
=> si il est mineur je :
      -1: lui signale et 2: le renvoie vers un autre site.*/
// --Je declare la majorité legale
// --demander l'age en s'assurant que nous avons un NUMBER
// --Je verifie si mon internaute est majeur
// -- Si il est mineur je le lui signale et ensuite le redirige sur le site de mon choix.   


var age = window.prompt("question: quel est ton age?", "saisissez votre age en chiffre ex: 5 pour 5 ans");


if (age >= 18) {
    alert(" bienvenue");
    
} else {
    alert("désolé, vous n'avez pas l'age requis qui est de 18 ans minimum, vous allez être redirigé vers le site adapté")
    window.location.replace("https://www.darty.com/"); // lien de redirection que l'on veut ou "document.location.href"
}