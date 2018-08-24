$(document).ready(function(){

    reloadLink();
    
    $("#add_button").click(function(){
        //console.log($("#add_url").val());
        $('#menu').append('<li><a href="'+$("#add_url").val()+'"></a></li>');
        $("#add_url").val('')
        reloadLink();

    });

    console.log($('a').length);

    

    function reloadLink(){
        $('a').each(function(){
            var that = $(this);
            var enlace = that.attr("href");

            that.attr('target','_blank');
            //that.removeAttr('target','_blank')

            that.text(enlace);
        });
        
    }
})