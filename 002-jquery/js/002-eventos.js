$(document).ready(function(){
    var caja =$('#caja');

    /*
    caja.mouseover(function(){
        $(this).css('background','red');
    });

    caja.mouseout(function(){
        $(this).css('background','green');
    });
*/
    //hover

    function cambiaRojo(){
        $(this).css('background','red');
    }

    function cambiaVerde(){
        $(this).css('background','green');
    }

    caja.hover(cambiaRojo, cambiaVerde);

    // Click, Doble click
    caja.click(function(){
        $(this).css('background', 'blue')
        .css('color','white');
    });

    caja.dblclick(function(){
        $(this).css('background', 'purple')
        .css('color','pink');
    });

    //Focus y Blur
    var nombre = $("#nombre");
    var datos = $('#datos');

    nombre.focus(function(){
        $(this).css('border', "2px solid green");
    });

    nombre.blur(function(){
        $(this).css('border', "1px solid #ccc");
        datos.text($(this).val()).show();
    });


    //mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    var sigueme = $('#sigueme');

    $(document).mousemove(function(){
        
        console.log("en X: "+event.clientX);
        console.log("en Y: "+event.clientY);
        sigueme.css("left", event.clientX).css('top', event.clientY)
    });

})