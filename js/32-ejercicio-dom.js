'use sctrict'

window.addEventListener('load', function(){
    console.log("Dom cargado");

    var formulario = this.document.querySelector("#formulario");
    
    formulario.addEventListener('submit', function(){
        console.log('Submit capturado');
        
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        // Validacion
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre es invalido");
            return false;
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El apellido es invalido");
            return false;
        }

        if(edad == null || isNaN(edad) || edad <= 0 ){
            alert("La edad no es invalido");
            return false;
        }

        // mostramos los datos
        var dashed = document.querySelector('.dashed');
        dashed.style.display = "block";
        console.log()

        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        /*
        var parrafo = document.createElement("p");
        parrafo.append(nombre);
        dashed.append(parrafo);

        parrafo = document.createElement("p");
        parrafo.append(apellidos);
        dashed.append(parrafo);

        parrafo = document.createElement("p");
        parrafo.append(edad);
        dashed.append(parrafo);
        */
    });
});