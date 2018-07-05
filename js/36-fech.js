'use strict'

// Fech (ajax) y peticiones a servicios /apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_clementine = document.querySelector("#clementine");

getUsuarios()
.then(data => data.json())
.then(users => {
    console.log(users);
    listadoUsuarios(users);
    
    return getClementine();
})
.then(data => data.json())
.then(user => {
    
    mostrarClementine(user);
    return getInfo();
})
.then(data => {
    console.log(data);
})
.catch(error =>{
    console.log(error);
});

function listadoUsuarios(usuarios){
    usuarios.map((user, i)=>{
        let nombre = document.createElement('h3');
        nombre.innerHTML = i+": "+user.name;
        div_usuarios.append(nombre);

        document.querySelector("#usuarios .loading").style.display = "none";
    })
}

function mostrarClementine(user){
    console.log(user);

    let nombre = document.createElement('h4');
    nombre.innerHTML = "Nombre de Usuario: "+user.name;
    div_clementine.append(nombre);

    nombre = document.createElement('h4');
    nombre.innerHTML = "Correo Electronico: "+user.email;
    div_clementine.append(nombre);

    document.querySelector("#clementine .loading").style.display = "none";
}

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getClementine(){
    return fetch('https://jsonplaceholder.typicode.com/users/3');
}

function getInfo(){
    

    var profesor = {
        nombre: 'Reynaldo',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject)=>{
        var profesor_string = JSON.stringify(profesor);

        if(typeof profesor_string != 'string') return reject('error');

        return resolve(profesor_string);
    });


    
}