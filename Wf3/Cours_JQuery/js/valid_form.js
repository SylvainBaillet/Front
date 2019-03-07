// alert('ok');

$(function () {
    /**
         * Valider son email
         */
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /**
     * Valider son numéro de téléphone en FR
     */
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    };

    $('#contact').submit(function (e) {// 'e' peut etre ecrit 'ev' ou 'event'

        e.preventDefault();

        $('#contact .is-invalid').removeClass('is-invalid');
        $('#contact .is-valid').removeClass('is-valid');
        $('#contact .alert alert-danger').remove();

        // const est comme variable
        const nom = $('#nom');
        const prenom = $('#prenom');
        const email = $('#email');
        const tel = $('#tel');

        // -- Validation du champ "nom"
        if (nom.val().length === 0) {//le 0 signifie que le champ est vide
            nom.addClass('is-invalid');
        } else {
            nom.addClass('is-valid');
        }

        // -- Validation du champ "prenom"
        if (prenom.val().length === 0) {
            prenom.addClass('is-invalid');
        } else {
            prenom.addClass('is-valid');
        }

        // -- Validation du champ "email"
        if (!validateEmail(email.val())) {//le "!" signifie 'non' ici, si l'email n'est pas validé
            email.addClass('is-invalid');
        } else {
            email.addClass('is-valid');
        }

        // -- Validation du champ "tel"
        if (!validateTel(tel.val())) {
            tel.addClass('is-invalid');
        } else {
            tel.addClass('is-valid');
        }


        if ($(this).find('.is-invalid').length === 0) {//.find cherche dans tout le document la liste des balises qui ont la class="is-invalid", si le formulaire ne comporte pas de champs vide, donc 'is-invalid' alors on remplace le formulaire avec une div class alert et un message de succes
            $(this).replaceWith(
                `<div class="alert alert-success">
                        Votre contact à bien été tranmis ! Nous vous répondront dans les meilleurs délais
                    </div>`
            )
        } else {
            $(this).prepend(// regarder la methode prepend , pour ajouter avant
                `<div class="alert alert-danger">
                        Nous n'avons pas été en mesure de valider votre contact. Vérifiez vos informations
                    </div>`
            )
        }

    });


});