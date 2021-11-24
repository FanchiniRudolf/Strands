'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/inf_portal";
const dbName = "inf_portal"; 

module.exports.obtener_usuarios = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        
        const db = mdbclient.db(dbName); 

        db.collection("usuario").findOne({}, function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

/// practica 1 obtener usuarios en base a su correo electronico
module.exports.buscar_usuario_by_mail = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.query.correo_electrónico; 

        db.collection("usuario").findOne({ "correo_electrónico": idusuario }, function (err, result) { 
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
module.exports.login = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.query.correo_electrónico; 
        var pass = req.query.contraseña;

        db.collection("usuario").find({ "correo_electrónico": idusuario , "contraseña" : pass}).toArray(function (err, result) { 
            if (err) { 
                console.log("nel");
                throw err; 
            }
            if(result<0){
                console.log("nel nohay");
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        });
    }); 
};


//3 Obtener toda la información de la colección de videojuegos de un usuario en específico. 
module.exports.obtener_videojuegos_usuario = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
        const db = mdbclient.db(dbName); 
        var idusuario = req.query.username;
        console.log("idusuario" , idusuario); 

        db.collection("videojuego").find({ "username": idusuario }).toArray(function (err, result) { 
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
        var idusuario = req.query.username; 
        var name = req.query.nombre;
        console.log("idusuario" , idusuario); 
        console.log("nombre" , name); 

        db.collection("videojuego").find({ "username": idusuario, "nombre": name}).toArray(function (err, result) { 
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
        var idusuario = req.query.username; 
        var consola = req.query.plataforma;

        db.collection("videojuego").find({ "username": idusuario, "plataforma": consola }).toArray(function (err, result) { 
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
        var idusuario = req.query.username; 

        db.collection("actividad").find({"username": idusuario }).toArray(function (err, result) { 
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
        var inicio = req.query.inicio; 
        var fin = req.query.fin; 

        db.collection("actividad").find({ }).toArray(function (err, result) { 
            if (err) { 
                throw err; 
            } 

            result = result.filter((item) => {
                const from = new Date(inicio);
                const date = new Date(item.fecha);
                const to = new Date(fin);
    
                return from <= date && to >= date;
              });
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
        var nombre = req.query.username; 
        var event = req.query.evento; 

        db.collection("actividad").find({"username" : nombre, "evento" : event }).toArray(function (err, result) { 
            if (err) { 
                throw err; 
            } 
            console.log("Consulta ejecutada..."); 
            mdbclient.close(); 
            res.end(JSON.stringify(result)); 
        }); 
    }); 
};

