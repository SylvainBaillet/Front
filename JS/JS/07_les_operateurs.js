/* L'opérateur ET : && ou AND

--Si je cumule 2 conditions
=>prenom === prenomLogin
=>monAge === ageLogin

Pour que les 2 correspondent pour être validés, il faut les associer
if((prenomLogin === prenom) && (ageLogin === monAge))(
    /*---code---- */
/*---code---- */
// je ne rentre ici que les 2 conditions vraies)

/* 
if ((A) && (B)) {....} 
=> si A est FAUX et B est VRAI = FAUX
=> si A est VRAI et B est FAUX = FAUX
=> si A est FAUX et B est FAUX = FAUX
=> si A est VRAI et B est VRAI = VRAI
*/

/* 
L'operateur ou : || ou OR (| pipe => alt gr + 6)
if((C) || (D)) {....}
=> si C est FAUX et D est FAUX = FAUX
=> si C est FAUX et D est VRAI = VRAI
=> si C est FAUX et D est FAUX = VRAI
=> si C est VRAI et D est VRAI = FAUX
*/

/*
L'operateur "!" signifie : Le contraire de
var utilisateurLog = true;
if(!utilisateurLog){
    // si l'utilisateur n'est pas loggé
}
// ce qui revient a écrire:
if (utilisateurLog == false){
    // si l'utilisateur n'est pas loggé
}
// l'opérateur "!" est toujours associé a "=" ou "=="
 */