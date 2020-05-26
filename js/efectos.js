$(document).ready(function() {

    //Efecto menu
    $('.menu a').each(function(index, elemento) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //Efecto header
    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //Scroll elementos menú
    var nosotros = $('#nosotros').offset().top,
        menu = $('#ventajas').offset().top,
        galeria = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;

    $('#btn-nosotros').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros - 50
        }, 500);
    });

    $('#btn-menu').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu - 50
        }, 500);
    });

    $('#btn-galeria').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 50
        }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 50
        }, 500);
    });

});