// alert ("fg");
var nb1 = prompt("saisissez un 1er chiffre");
var nb2 = prompt("saisissez un 2eme chiffre");

if(isNaN(nb1) && (!isNaN(nb2))){
    if(nb1 <nb2){
        document.write("votre premier nombre: " + nb1 + "est plus petit que votre second: " + nb2);
    }else if(nb1 > nb2){
        document.write("votre premier nombre: " + nb1 + "est plus grand que votre second: " + nb2);
    }else{
        document.write("votre premier nombre: " + nb1 + "est égal à votre second: " + nb2);
    }
}
else{
    alert("vous n'avez pas saisi de chiffre");
}