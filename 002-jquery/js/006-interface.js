$(document).ready(function(){

    // Mover elementos
    $(".elemento").draggable();

    // Redimensionar
    $(".elemento").resizable();

    //Seleccionar elementos
    //$(".lista-seleccionable").selectable();

    // Ordenar
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    //Drop
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo");
        }
    });
    $("#elemento-movido").draggable();

    //efectos

    $("#mostrar").click(function(){
        //$(".caja-efectos").effect("explode");
        //$(".caja-efectos").toggle("explode");
        //$(".caja-efectos").toggle("blind");
        //$(".caja-efectos").toggle("slide");
        //$(".caja-efectos").toggle("drop");
        //$(".caja-efectos").toggle("fold");
        //$(".caja-efectos").toggle("puff");
        //$(".caja-efectos").toggle("scale");
        $(".caja-efectos").toggle("shake", 4000);
    });

    //Tooltip
    $(document).tooltip();

    // Popup
    $("#lanzar-popup").click(function(){
            $("#popup").dialog();
        }
    );

    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();
    
})