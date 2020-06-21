window.addEventListener('scroll', function(){
    var altura = 550;
    var header = document.getElementById('Header');
    var boton = document.getElementById('botonMenu');
    var menu = document.getElementById('Mcont_MenuFlex');
    var menu_2 = document.getElementById('cont_MenuFlex');
    if (window.pageYOffset > altura){
        header.classList.remove('headerS');
        header.classList.add('headerF');
        boton.classList.remove('botonS');
        boton.classList.add('botonF');
        menu.classList.remove('Mcont_MenuFlex_2');
        menu_2.classList.remove('cont_MenuFlex-s_2');
    } else {
        header.classList.remove('headerF');
        header.classList.add('headerS');
        boton.classList.remove('botonF');
        boton.classList.add('botonS');
        menu.classList.add('Mcont_MenuFlex_2');
        menu_2.classList.add('cont_MenuFlex-s_2');
    }
});

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
