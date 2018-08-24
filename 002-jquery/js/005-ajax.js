$(document).ready(function(){
    // load
    //$("#datos").load("https://reqres.in/")

    //Get y Post

    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        console.log(response);

        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });

    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
            'name': $('input[name="name"]').val(),
            'web': $('input[name="web"]').val(),
        }
    
        /*$.post("https://reqres.in/api/users", usuario, function(response){
            console.log(response);
        });*/
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        })

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando Usuario...");
            }
        });

        return false;
    });
});