'use strict'
var Project = require('../models/project');
var fs = require('fs');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: "Soy la home"
        })
    },

    test: function(req, res){
        return res.status(200).send({
            message: "Soy el metodo test del controlador de project"
        })
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar el documento'});

            if(!projectStored) return res.status(404).send({mmessage: 'No se ha podido guardar el documento'});

            return res.status(200).send({project: projectStored});
        })
        /*
        return res.status(200).send({
            project: project,
            message: "Metodo saveProject"
        })
        */
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if(projectId == null){
            if(!project) return res.status(404).send({message: 'No se ha encontrado el proyecto'});
        }

        Project.findById(projectId, (err, project) => {

            if(err) return res.status(500).send({message: 'Error al devolver los datos'});

            if(!project) return res.status(404).send({message: 'No se ha encontrado el proyecto'});

            return res.status(200).send({project});

        });
    },

    getProjects: function(req, res){
        Project.find({}).exec((err, projects)=> {

            if(err) return res.status(500).send({message: 'Error al devolver los datos'});

            if(!projects) return res.status(404).send({message: 'No hay proyectos parta mostrar'});

            return res.status(200).send({projects});

        })
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdate)=>{
            
            if(err) return res.status(500).send({message: 'Error al actualizar'});

            if(!projectUpdate) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

            return res.status(200).send({
                projects: projectUpdate
            });
        })
    },

    deleteProject: function(req, res){
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId, (err, projectRemoved)=>{
            
            if(err) return res.status(500).send({message: 'No de ha podido borrar el proyecto'});

            if(!projectRemoved) return res.status(404).send({message: 'No se puede eliminar ese proyecto'});

            return res.status(200).send({
                projects: projectRemoved
            });
        })
    },

    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split("/");
            var fileName = fileSplit[1];
            var extSplit = fileName.split(".");
            var fileExt  =extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName},{new: true}, (err, projectUpdate)=>{
                
                    if(err) return res.status(500).send({message: 'La imagen no se ha subido'});
    
                    if(!projectUpdate) return res.status(404).send({message: 'El proyecto no se encontró'});
    
                    return res.status(200).send({
                        project: projectUpdate
                    });
                });
            }else{
                fs.unlink(filePath, (err)=>{
                    return res.status(200).send({message: 'la extención no es válida'})
                })
            }



        }else{
            return res.status(200).send({
                message: 'No se han subido archivos'
            });
        }
    }
};

module.exports = controller;