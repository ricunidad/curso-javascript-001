$(document).ready(function(){
    //Selector de ID
    $('#rojo').css("background","red").css("color","white");
    $('#amarillo').css("background","yellow").css("color","green");
    $('#verde').css("background","green").css("color","white");
    $('#azul').css("background","blue").css("color","white");

    //Selector de clase
    var mi_clase = $(".zebra").css("padding", "5px");

    $('.sin_borde').click(function(){
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta
    var parrafos = $('p');

    parrafos.click(function(){
        var p = $(this);

        if(p.hasClass('grande')){
            p.removeClass('grande');
        }else{
            p.addClass('grande')
        }
        
    })

    //Selectores de atributo
    $('[title="Google"]').css('background', '#CCC');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros
    //$('p, a').addClass('margen-superior');
    var busqueda = $('#caja').find('resaltado');
    console.log(busqueda);
})
