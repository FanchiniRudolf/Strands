//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
/*
* module.exports existe por default en cada archivo JS de Node.
* module es una variable que representa un módulo, y exports es un objeto que
* expone dicho módulo.
*/
module.exports = function (app) {
    var gameCollection = require('./gameCollectionController');
   
    app.route('/user')
        .get(gameCollection.obtener_usuarios)
        .post(gameCollection.agregar_usuario)
        .delete(gameCollection.borrar_usuario)

    app.route('/user/search')
        .get(gameCollection.buscar_usuario); //1 
    
    //2
    app.route('/games')


    app.route('/games/:userId')
        .get(gameCollection.obtener_videojuegos_usuario); //3 

    app.route('/games/search:userId') ////????  
        .get(gameCollection.obtener_buscar_videojuegos_usuario); //4 

    app.route('/games/search:userId') ///Poner mas parametros de usuario y consola 
        .get(gameCollection.obtener_videojuegos_usuario_consola); //5
    

    app.route('/event')
    
    app.route('/event/search:userId')
        .get(gameCollection.obtener_eventos_usuario) //6

    app.route('/event/search:date') //pasar dos parametros rango de fechas
        .get(gameCollection.obtener_eventos_fechas) //7
    
    app.route('/event/search:userId:event') //pasar dos parametros userid y busqueda de evento
        .get(gameCollection.obtener_busqueda_eventos_usuario) //7
    
};
