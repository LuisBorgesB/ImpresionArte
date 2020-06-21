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


if (window.screen.width >= 644) {
    var ContBingo = document.getElementById('ContenedorCartonesBingo')
    ContBingo.insertAdjacentHTML('beforeend', '<div id="BoxFantasma" class="ContNull"></div>')

    var ContRecetarios = document.getElementById('ContenedorRecetariosMedicos')
    ContRecetarios.insertAdjacentHTML('beforeend', '<div class="ContNull"></div>')
}

if (window.screen.availWidth >= 966) {

    document.getElementById('BoxFantasma').classList.remove('ContNull')
    document.getElementById('BoxFantasma').classList.add('ContFantasma')


    var ContTarjeta = document.getElementById('ContenedorTarjetasPresentacion')
    ContTarjeta.insertAdjacentHTML('beforeend', '<div id="BoxFantasma2" class="ContNull"></div>')
    ContTarjeta.insertAdjacentHTML('beforeend', '<div id="BoxFantasma3" class="ContNull"></div>')

    var ContMiniRifas = document.getElementById('ContenedorMiniRifas')
    ContMiniRifas.insertAdjacentHTML('beforeend', '<div id="BoxFantasma4" class="ContNull"></div>')
    ContMiniRifas.insertAdjacentHTML('beforeend', '<div id="BoxFantasma5" class="ContNull"></div>')

    var ContRifasGrandes = document.getElementById('ContenedorRifasGrandes')
    ContRifasGrandes.insertAdjacentHTML('beforeend', '<div id="BoxFantasma6" class="ContNull"></div>')
    ContRifasGrandes.insertAdjacentHTML('beforeend', '<div id="BoxFantasma7" class="ContNull"></div>')
}

if (window.screen.width >= 1288) {
    document.getElementById('BoxFantasma').classList.remove('ContFantasma')
    document.getElementById('BoxFantasma').classList.add('ContNull')

    var ContBingo = document.getElementById('ContenedorCartonesBingo')
    ContBingo.insertAdjacentHTML('beforeend', '<div class="ContNull"></div>')
    ContBingo.insertAdjacentHTML('beforeend', '<div class="ContNull"></div>')

    document.getElementById('BoxFantasma2').classList.remove('ContNull')
    document.getElementById('BoxFantasma2').classList.add('ContFantasma')

    document.getElementById('BoxFantasma3').classList.remove('ContNull')
    document.getElementById('BoxFantasma3').classList.add('ContFantasma')

    document.getElementById('BoxFantasma4').classList.remove('ContNull')
    document.getElementById('BoxFantasma4').classList.add('ContFantasma')

    document.getElementById('BoxFantasma5').classList.remove('ContNull')
    document.getElementById('BoxFantasma6').classList.add('ContFantasma')

    document.getElementById('BoxFantasma6').classList.remove('ContNull')
    document.getElementById('BoxFantasma6').classList.add('ContFantasma')

    document.getElementById('BoxFantasma7').classList.remove('ContNull')
    document.getElementById('BoxFantasma7').classList.add('ContFantasma')

    var ContRecetarios = document.getElementById('ContenedorRecetariosMedicos')
    ContRecetarios.insertAdjacentHTML('beforeend', '<div class="ContNull"></div>')
    ContRecetarios.insertAdjacentHTML('beforeend', '<div class="ContNull"></div>')
}

if (window.screen.width >= 1024) {
    var BoxProdcutos1 = document.getElementById('articulos1');
    var BoxProdcutos2 = document.getElementById('articulos2');
    var BoxProdcutos3 = document.getElementById('articulos3');
    var BoxProdcutos4 = document.getElementById('articulos4');
    var BoxProdcutos5 = document.getElementById('articulos5');
    var BoxProdcutos6 = document.getElementById('articulos6');
    var BoxProdcutos7 = document.getElementById('articulos7');
    var BoxProdcutos8 = document.getElementById('articulos8');
    var BoxProdcutos9 = document.getElementById('articulos9');
    var BoxProdcutos10 = document.getElementById('articulos10');
    var BoxProdcutos11 = document.getElementById('articulos11');
    var BoxProdcutos12 = document.getElementById('articulos12');
    var BoxProdcutos13 = document.getElementById('articulos13');
    var BoxProdcutos14 = document.getElementById('articulos14');
    var BoxProdcutos15 = document.getElementById('articulos15');
    var BoxProdcutos16 = document.getElementById('articulos16');
    var BoxProdcutos17 = document.getElementById('articulos17');
    var BoxProdcutos18 = document.getElementById('articulos18');
    var BoxProdcutos19 = document.getElementById('articulos19');
    var BoxProdcutos20 = document.getElementById('articulos20');
    var BoxProdcutos21 = document.getElementById('articulos21');
    var BoxProdcutos22 = document.getElementById('articulos22');
    var BoxProdcutos23 = document.getElementById('articulos23');
    var BoxProdcutos24 = document.getElementById('articulos24');
    var BoxProdcutos25 = document.getElementById('articulos25');
    var BoxProdcutos26 = document.getElementById('articulos26');

    BoxProdcutos1.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto');
        var BoxImg = document.getElementById('ContenedorImagen');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos1.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto');
        var BoxImg = document.getElementById('ContenedorImagen');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos2.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto2');
        var BoxImg = document.getElementById('ContenedorImagen2');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
            
    });
    BoxProdcutos2.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto2');
        var BoxImg = document.getElementById('ContenedorImagen2');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos3.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto3');
        var BoxImg = document.getElementById('ContenedorImagen3');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos3.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto3');
        var BoxImg = document.getElementById('ContenedorImagen3');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos4.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto4');
        var BoxImg = document.getElementById('ContenedorImagen4');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos4.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto4');
        var BoxImg = document.getElementById('ContenedorImagen4');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos5.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto5');
        var BoxImg = document.getElementById('ContenedorImagen5');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos5.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto5');
        var BoxImg = document.getElementById('ContenedorImagen5');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos6.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto6');
        var BoxImg = document.getElementById('ContenedorImagen6');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos6.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto6');
        var BoxImg = document.getElementById('ContenedorImagen6');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos7.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto7');
        var BoxImg = document.getElementById('ContenedorImagen7');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos7.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto7');
        var BoxImg = document.getElementById('ContenedorImagen7');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos8.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto8');
        var BoxImg = document.getElementById('ContenedorImagen8');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos8.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto8');
        var BoxImg = document.getElementById('ContenedorImagen8');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos9.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto9');
        var BoxImg = document.getElementById('ContenedorImagen9');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos9.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto9');
        var BoxImg = document.getElementById('ContenedorImagen9');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos10.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto10');
        var BoxImg = document.getElementById('ContenedorImagen10');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos10.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto10');
        var BoxImg = document.getElementById('ContenedorImagen10');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos11.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto11');
        var BoxImg = document.getElementById('ContenedorImagen11');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos11.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto11');
        var BoxImg = document.getElementById('ContenedorImagen11');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos12.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto12');
        var BoxImg = document.getElementById('ContenedorImagen12');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos12.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto12');
        var BoxImg = document.getElementById('ContenedorImagen12');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos13.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto13');
        var BoxImg = document.getElementById('ContenedorImagen13');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos13.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto13');
        var BoxImg = document.getElementById('ContenedorImagen13');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos14.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto14');
        var BoxImg = document.getElementById('ContenedorImagen14');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos14.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto14');
        var BoxImg = document.getElementById('ContenedorImagen14');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos15.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto15');
        var BoxImg = document.getElementById('ContenedorImagen15');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos15.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto15');
        var BoxImg = document.getElementById('ContenedorImagen15');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos16.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto16');
        var BoxImg = document.getElementById('ContenedorImagen16');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos16.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto16');
        var BoxImg = document.getElementById('ContenedorImagen16');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos17.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto17');
        var BoxImg = document.getElementById('ContenedorImagen17');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos17.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto17');
        var BoxImg = document.getElementById('ContenedorImagen17');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos18.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto18');
        var BoxImg = document.getElementById('ContenedorImagen18');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos18.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto18');
        var BoxImg = document.getElementById('ContenedorImagen18');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos19.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto19');
        var BoxImg = document.getElementById('ContenedorImagen19');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos19.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto19');
        var BoxImg = document.getElementById('ContenedorImagen19');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos20.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto20');
        var BoxImg = document.getElementById('ContenedorImagen20');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos20.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto20');
        var BoxImg = document.getElementById('ContenedorImagen20');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos21.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto21');
        var BoxImg = document.getElementById('ContenedorImagen21');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos21.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto21');
        var BoxImg = document.getElementById('ContenedorImagen21');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos22.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto22');
        var BoxImg = document.getElementById('ContenedorImagen22');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos22.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto22');
        var BoxImg = document.getElementById('ContenedorImagen22');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos23.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto23');
        var BoxImg = document.getElementById('ContenedorImagen23');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos23.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto23');
        var BoxImg = document.getElementById('ContenedorImagen23');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos24.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto24');
        var BoxImg = document.getElementById('ContenedorImagen24');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos24.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto24');
        var BoxImg = document.getElementById('ContenedorImagen24');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos25.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto25');
        var BoxImg = document.getElementById('ContenedorImagen25');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos25.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto25');
        var BoxImg = document.getElementById('ContenedorImagen25');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });


    BoxProdcutos26.addEventListener('mouseenter', function(){
        var BoxA1 = document.getElementById('ContenedorTexto26');
        var BoxImg = document.getElementById('ContenedorImagen26');
            BoxA1.classList.remove('ContenedorTexto');
            BoxA1.classList.add('ContenedorTexto_2');
            BoxImg.classList.remove('ContenedorImagen');
            BoxImg.classList.add('ContenedorImagen2');
    });
    BoxProdcutos26.addEventListener('mouseleave', function(){
        var BoxA1 = document.getElementById('ContenedorTexto26');
        var BoxImg = document.getElementById('ContenedorImagen26');
            BoxA1.classList.remove('ContenedorTexto_2');
            BoxA1.classList.add('ContenedorTexto');
            BoxImg.classList.remove('ContenedorImagen2');
            BoxImg.classList.add('ContenedorImagen');
    });
}

