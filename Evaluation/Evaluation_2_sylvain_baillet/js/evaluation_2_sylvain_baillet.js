// alert('dfhgdfh');
$(function(){
    console.log('jquery est bien chargé');

    //creation d'une fonction permettant de changer la source des immages des carousels au scroll bottom  
    $(window).scroll(function(){
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            console.log('Bas de page');
            
        }
    })//fin de la fonction scollbottom    


})// fin du scope jquery