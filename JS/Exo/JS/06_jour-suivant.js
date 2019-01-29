var queljour = prompt("Saisissez un jour pour afficher le jour suivant");
// var lundi = ("lundi");
// var mardi = ("mardi");
// var mercredi = ("mercredi");
// var jeudi = ("jeudi");
// var vendredi = ("vendredi");
// var samedi = ("samedi");
// var dimanche = ("dimanche");

// if (queljour = lundi){
//     alert=("mardi");
// }

// correction

// avec une fonction: if else if

if (queljour === "lundi") {// si la saisie de l'internaute est strictement égale à lundi
    document.write("demain nous serons mardi!");
}else if(queljour === "mardi"){
    document.write("demain nous serons mercredi!");
}else if(queljour === "mercredi"){
    document.write("demain nous serons jeudi!");
}else if(queljour === "jeudi"){
    document.write("demain nous serons vendredi!");
}else if(queljour === "vendredi"){
    document.write("demain nous serons samedi!");
}else if(queljour === "samedi"){
    document.write("demain nous serons dimanche!");
}else if(queljour === "dimanche"){
    document.write("demain nous serons lundi!");
}else if(queljour === "lundi"){
    document.write("demain nous serons mardi!");
}else{
    document.write("ceci n'est pas un jour valide");
}


// avec une fonction switch

// switch(queljour){
//     case "lundi":
//         document.write("demain nous serons mardi!");
//         break;
//     case "mardi":
//         document.write("demain nous serons mercredi!");
//         break;
//     case "mercredi":
//         document.write("demain nous serons jeudi!");
//         break;
//     case "jeudi":
//         document.write("demain nous serons vendredi!");
//         break;
//     case "vendredi":
//         document.write("demain nous serons samedi!");
//         break;
//     case "samedi":
//         document.write("demain nous serons dimanche!");
//         break;
//     case "dimanche":
//         document.write("demain nous serons lundi!");
//     break;
//     default:
//     break;
// }

// on utilise un if - else if ou un switch