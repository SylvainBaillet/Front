// alert("fdgh");
var disMoi = "";
var i = 0;

while ((disMoi !== "oui") && (disMoi !== "non")){
    disMoi = prompt ("Alors on joue au Ni oui ni non?");
    document.write(disMoi + "pour la" + i + "è Fois, dis moi oui ou non! <br/>");
    i++
}
document.write("<h1 style='background-color:cyan; text-align:center;'> fini! </h1>")