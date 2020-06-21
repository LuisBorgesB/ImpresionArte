var menuTouch = document.getElementById('botonMenu');
    menuTouch.addEventListener('click', function(){
    var cMenu = document.getElementById('cont_MenuFlex');
    var nav = document.getElementById('navMenu-s');
if (cMenu.className == 'cont_MenuFlex-s') {
    cMenu.classList.remove('cont_MenuFlex-s');
    cMenu.classList.add('cont_MenuFlex-f');
    nav.classList.remove('navMenu-s');
    nav.classList.add('navMenu-f');
} else {
    cMenu.classList.remove('cont_MenuFlex-f');
    cMenu.classList.add('cont_MenuFlex-s');
    nav.classList.remove('navMenu-f');
    nav.classList.add('navMenu-s');
    }
});

var menuTouch = document.getElementById('botonMenu');
    menuTouch.addEventListener('click', function(){
    var cMenu = document.getElementById('Mcont_MenuFlex');
    var nav = document.getElementById('MnavMenu-s');
if (cMenu.className == 'Mcont_MenuFlex-s') {
    cMenu.classList.remove('Mcont_MenuFlex-s');
    cMenu.classList.add('Mcont_MenuFlex-f');
    nav.classList.remove('MnavMenu-s');
    nav.classList.add('MnavMenu-f');
} else {
    cMenu.classList.remove('Mcont_MenuFlex-f');
    cMenu.classList.add('Mcont_MenuFlex-s');
    nav.classList.remove('MnavMenu-f');
    nav.classList.add('MnavMenu-s');
}
});

/*Productos_Bingos*/

var imagenBingo1 = document.getElementById('miniVista_2');
imagenBingo1.addEventListener('click', function(){
    var fotoB1 = document.getElementById('fotoB1');
    var fotoB2 = document.getElementById('fotoB2');
    var fotoB3 = document.getElementById('fotoB3');
    if (fotoB1.className == 'mostrar'){
        fotoB1.classList.remove('mostrar');
        fotoB1.classList.add('ocultar');
    } else {
        fotoB3.classList.remove('mostrar')
        fotoB3.classList.add('ocultar');
    }
    fotoB2.classList.remove('ocultar');
    fotoB2.classList.add('mostrar');
});

var imagenBingo1 = document.getElementById('miniVista_1');
imagenBingo1.addEventListener('click', function(){
    var fotoB1 = document.getElementById('fotoB1');
    var fotoB2 = document.getElementById('fotoB2');
    var fotoB3 = document.getElementById('fotoB3');
    if (fotoB2.className == 'mostrar'){
        fotoB2.classList.remove('mostrar');
        fotoB2.classList.add('ocultar');
    } else {
        fotoB3.classList.remove('mostrar')
        fotoB3.classList.add('ocultar');
    }
    fotoB1.classList.remove('ocultar');
    fotoB1.classList.add('mostrar');
});

var imagenBingo3 = document.getElementById('miniVista_3');
imagenBingo3.addEventListener('click', function(){
    var fotoB1 = document.getElementById('fotoB1');
    var fotoB2 = document.getElementById('fotoB2');
    var fotoB3 = document.getElementById('fotoB3');
    if (fotoB2.className == 'mostrar'){
        fotoB2.classList.remove('mostrar');
        fotoB2.classList.add('ocultar');
    } else {
        fotoB1.classList.remove('mostrar')
        fotoB1.classList.add('ocultar');
    }
    fotoB3.classList.remove('ocultar');
    fotoB3.classList.add('mostrar');
});

function intervalo_1 () {
    var fotoB1 = document.getElementById('fotoB1');
    var fotoB2 = document.getElementById('fotoB2');
    var fotoB3 = document.getElementById('fotoB3');
        fotoB1.classList.remove('mostrar');
        fotoB1.classList.add('ocultar');
        fotoB2.classList.remove('ocultar');
        fotoB2.classList.add('mostrar');
        fotoB3.classList.remove('mostrar');
        fotoB3.classList.add('ocultar');
    };
function intervalo_2 () {
    var fotoB1 = document.getElementById('fotoB1');
    var fotoB2 = document.getElementById('fotoB2');
    var fotoB3 = document.getElementById('fotoB3');
    fotoB1.classList.remove('mostrar');
    fotoB1.classList.add('ocultar');
        fotoB2.classList.remove('mostrar');
        fotoB2.classList.add('ocultar');
        fotoB3.classList.remove('ocultar');
        fotoB3.classList.add('mostrar');
};
function intervalo_3 () {
    var fotoB1 = document.getElementById('fotoB1');
    var fotoB2 = document.getElementById('fotoB2');
    var fotoB3 = document.getElementById('fotoB3');
    fotoB2.classList.remove('mostrar');
    fotoB2.classList.add('ocultar');
        fotoB3.classList.remove('mostrar');
        fotoB3.classList.add('ocultar');
        fotoB1.classList.remove('ocultar');
        fotoB1.classList.add('mostrar');
};

window.onload = function() {
    this.setInterval(intervalo_1, 5000);
    this.setInterval(intervalo_2, 10000);
    this.setInterval(intervalo_3, 15000);
};
