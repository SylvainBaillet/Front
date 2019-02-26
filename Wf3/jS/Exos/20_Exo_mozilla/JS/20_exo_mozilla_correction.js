// alert("ok");

// la fonction qui va switcher l'image lorsque l'on clique dessus

var monImage = document.querySelector('img'); // query selector, on stock dans une variable monImage, la premiere image du document.
// (querySelectorAll recupererait toutes les images dans un tableau) 

console.log(monImage);

// On va utiliser la methode addEventListener pour ajouter un ecouteur de click sur l'image
// addEventListener attend deux parametres, pour le premier, l'evenement (ici , le click), pour le deuxieme, l'action a realiser (ici , changer la source de l'image!)
monImage.addEventListener('click', function(){
    // recuperer dans une variable maSrc, la valeur actuelle de l'attribut src de monImage, on va utiliser la methode getAttribute(). L'argument attendu pour cette methode est le nom d'un attribut de balise html (ici ce sera src)
    var maSrc = monImage.getAttribute('src');
    console.log(maSrc);
    // pour savoir si notre fonction fonctionne dans la console, il faut ici cliquer sur l'image, pour verifier si l'ecouteur click fonctionne, on aurait pu mettre une alert('click) dans la fonction

    // Si la valeur de la variable maSrc est égale à "images/logo_firefox_1.png"
    // Alors
    // alert("image1")
    // Sinon
    // alert(maSrc + "n'est pas l'image 1")

    // premiere version de cette condition pour tester
    // if(condition){
    //     instruction 1;
    // }
    // else{
    //     instruction 2;
    // }
    // ici on va intervertir les images avec la methode setAttribute qui attends deux arguments, le 1er, l'attribut ciblé (src) et le 2eme, sa nouvelle valeur (ici 'images/logo_firefox.png')
    if (maSrc === 'images/logo_firefox_1.png') {
        // alert("je suis l'image 1, ma source est" + maSrc );
        monImage.setAttribute('src', "images/logo_firefox_2.png");
    }
    else {
        // alert("je ne suis pas l'image 1"); 
        monImage.setAttribute('src', "images/logo_firefox_1.png");
    } 
});
    // fin de ma fonction d'inversion des images 
    /* 
    1- quand on clique sur l'image (dans le fonction addEventListener)
    2- La structure conditionnelle if else pour voir si la valeur de l'attribut est egale au chemin de l'image originale
    3- Si c'est le cas,  on change la valeur de cet attribut en lui indiquant le chemin vers la seconde image.
    4 -Si ce n'est pas le cas (ce qui signifie que l'image a été changée, la valeur de l'attribut src revient a sa valeur initiale)
     */

// ************************************

    // ajouter un message d'accueil personalisé
    /* On va changer le titre de ma page pour inclure un message pour l'utilisateur du site? Ce message sera conservé quand l'utilisateur quittera le siteet si il y revient plus tard
    On va conserver ce message dans le cache du Navigateur en utilisant l'API webstorage.
    Au final, on ajoutera une option sur le bouton, pour pouvoir changer l'utilisateur et le message d'accueil si besoin.
    */

    //1ere étape, recuperer dans une variable monTitre le premier h1 du document. et l'afficher dans console.
    var monTitre = document.querySelector('h1');
    console.log(monTitre);

    // 2eme étape, recuperer dans une variable monBouton, la premiere balise de code, button du document
    var monBouton = document.querySelector('button');
    console.log(monBouton);

    // preparer la fonction du message d'accueil qui sera invoqué, declanché plus tard

    function definirNomUtilisateur(){
        var monNom = prompt("ecris ton prenom");localStorage.setItem('nomUtilisateur', monNom);// la methode, localStorage.setItem() permet de stocker une information dans le cache du navigateur.
        monTitre.textContent = "bienvenue " + monNom;
    }
    /*Explication de la fonction definirMonUtilisateur(): Cette fonction utilise la methode prompt qui permet a l'utilisateur de saisir des données et de les enregistrer dans une variable quand l'utilisateur clique sur ok.
    Dans notre exemple on demande a l'utilisateur de saisir son nom, ensuite nous appelons l'API localStorage qui permet de stocker des données dans le navigateur pour pouvoir les réutiliser ulterieurement.
    Nous utilisons la fonction 'setItem' de cette API pour stocker la données qui nous interesse dans un conteneur appelé 'nomUtilisateur' . La valeur stockée ici est la veleur de la variable 'monNom' qui contient le nom saisi par l'utilisateur dans le prompt()
    Au final on utlise la proprieté 'textContent' du titre pour lui affecter un nouveau contenu*/ 

    //  la suite va etre;: tester si le nom n'est pas dans le cache, S'il n'y est pas, on demande avec prompt son nom a l'utilisateur, on declance la fonction definirNomUtilisateur(), Si il y est on la recupere et on l'affiche dans le titre.
    // pour testervider le localStorage
    // localStorage.clear();

    if (!localStorage.getItem('nomUtilisateur')){
        definirNomUtilisateur();
    // le "!" est un opérateur de negation 'NON', si il n'y a pas eu de nom entré dans le localStorage, on envoie la fonction definirNomUtilisateur();
    }
    else{
    var nomEnregistre = localStorage.getItem('nomUtilisateur');
    monTitre.textContent = "Bienvenue a nouveau " + nomEnregistre;
    }
    // concatenation pour afficher "bienvenue a nouveau" puis le nom enregistré

    // au click sur le bouton, invoquer la fonction definirNomUtilisateur()
    monBouton.addEventListener('click', function(){
        definirNomUtilisateur();
    });

    