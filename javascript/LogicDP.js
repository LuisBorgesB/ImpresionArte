
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
    var fotoBA1 = document.getElementById('fotoB1');
    var fotoBB1 = document.getElementById('fotoB2');
    if (fotoBA1.className == 'mostrar') {
        fotoBA1.classList.remove('mostrar');
        fotoBA1.classList.add('ocultar');
        fotoBB1.classList.remove('ocultar');
        fotoBB1.classList.add('mostrar');
    }
});

var imagenBingo2 = document.getElementById('miniVista_1');
imagenBingo2.addEventListener('click', function(){
    var fotoBA1 = document.getElementById('fotoB1');
    var fotoBB1 = document.getElementById('fotoB2');
    if (fotoBA1.className == 'ocultar') {
        fotoBA1.classList.remove('ocultar');
        fotoBA1.classList.add('mostrar');
        fotoBB1.classList.remove('mostrar');
        fotoBB1.classList.add('ocultar');
    }
});

function intervalo_2 () {
    var fotoBA1 = document.getElementById('fotoB1');
    var fotoBB1 = document.getElementById('fotoB2');
        fotoBA1.classList.remove('mostrar');
        fotoBA1.classList.add('ocultar');
        fotoBB1.classList.remove('ocultar');
        fotoBB1.classList.add('mostrar');
};

function intervalo_1 () {
    var fotoBA1 = document.getElementById('fotoB1');
    var fotoBB1 = document.getElementById('fotoB2');
        fotoBA1.classList.remove('ocultar');
        fotoBA1.classList.add('mostrar');
        fotoBB1.classList.remove('mostrar');
        fotoBB1.classList.add('ocultar');
};

window.onload = function() {
        this.setInterval(intervalo_2, 5000);
        this.setInterval(intervalo_1, 10000);
};