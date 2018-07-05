'use strict'

window.addEventListener("load", function(){
    //timers
    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutado");
            var h1 = document.querySelector("h1");
            if(h1.style.color == "red"){
                h1.style.color = "green";
            }else{
                h1.style.color = "red";
            }
            

        }, 3000);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener('click',function(){
        console.log("has parado el blucle");
        clearInterval(tiempo);
    })

    var start = document.querySelector("#start");

    start.addEventListener('click',function(){
        console.log("has iniciado el bucle");
        tiempo = intervalo();
    })
});