'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb//localhost:27017";
const dbName = "inf_portal"; 

/// practica 1 obtener usuarios en base a su correo electronico
module.exports.buscar_usuario = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.params.correo_electrónico; 

        db.collection("usuario").findOne({ correo_electrónico: idusuario }, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

// Autenticar un usuario en base a su correo electrónico y contraseña 

//Obtener toda la información de la colección de videojuegos de un usuario en específico. 
module.exports.obtener_videojuegos_usuario = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.params.username; 

        db.collection("videojuego").find({ username: idusuario }, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

//Obtener todos los registros de la colección de videojuegos de un usuario en específico, 
//y que correspondan a palabras de búsqueda utilizando el nombre del videojuego. 
module.exports.obtener_buscar_videojuegos_usuario = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.params.username; 
        var name = req.params.nombre;

        db.collection("videojuego").find({ username: idusuario, name: nombre }, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

//Obtener todos los registros de la colección de videojuegos de un usuario en específico y 
//de una consola en específico. 
module.exports.obtener_videojuegos_usuario_consola = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.params.username; 
        var consola = req.params.plataforma;

        db.collection("videojuego").find({ username: idusuario, plataforma: consola }, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

//Obtener todos los eventos del log que correspondan a un usuario en específico. 
module.exports.obtener_eventos_usuario = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.params.username; 

        db.collection("actividad").find({ username: idusuario }, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

//Obtener todos los eventos del log que correspondan a un rango de fechas en específico. 
module.exports.obtener_eventos_fechas = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var inicio = req.params.fecha; 
        var fin = req.params.fecha; 

        db.collection("actividad").find({ fecha:{ $gte:ISODate(inicio), $lt:ISODate(fin) } }, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

//Obtener todos los eventos del log que correspondan a un usuario en específico y que el 
//evento contenga las palabras de búsqueda indicadas. 
module.exports.obtener_busqueda_eventos_usuario = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var nombre = req.params.username; 
        var event = req.params.evento; 

        db.collection("actividad").find({username : nombre, evento : event }, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

