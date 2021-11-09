'use strict';
var fs = require("fs");
module.exports.obtener_juegos = function (req, res) {
    console.log("ewe");
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        // console.log(err);
        // console.log(data);
        res.end(data);
    });
};

module.exports.agregar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        var array = JSON.parse(data);
        // console.log(err);
        // console.log(data);
        var nuevo = req.body;
        array.push(nuevo);
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), 'utf8', function (err, data) {
            // console.log(err);
            res.end(err);
        });
        res.end(JSON.stringify(array));
    });
};
module.exports.obtener_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        var juegos = JSON.parse(data);
        var juego = juegos[req.params.gameIndex]
        // console.log(juego);
        res.end(JSON.stringify(juego));
    });
};

module.exports.borrar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", "utf8", function (err, data) {
        var array = JSON.parse(data);
        console.log(data);
        var juego_existe = req.body.id;
        
        array = array.filter(juego => juego.id !== juego_existe);
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), "utf8", function(err, data) {
            res.end(err);
        });
        res.end(JSON.stringify(array));
    });
};

module.exports.buscar_juego = function (req, res) {    
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
        var nombre = req.query.nombre;
        var array = JSON.parse(data);
        
        array = array.filter( game => game.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1)
        res.end(JSON.stringify(array));
    });
};