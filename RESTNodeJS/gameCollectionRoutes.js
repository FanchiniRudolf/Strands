//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
/*
* module.exports existe por default en cada archivo JS de Node.
* module es una variable que representa un módulo, y exports es un objeto que
* expone dicho módulo.
*/
module.exports = function (app) {
    var gameCollection = require('./gameCollectionController');
    app.route('/games')
        .get(gameCollection.obtener_juegos)
        .post(gameCollection.agregar_juego)
        .delete(gameCollection.borrar_juego)

    app.route('/games/search')
        .get(gameCollection.buscar_juego);

    app.route('/games/:gameIndex')
        .get(gameCollection.obtener_juego);
    
    
};
