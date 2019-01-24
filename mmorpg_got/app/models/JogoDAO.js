function JogoDAO(connection) {
    this.connection = connection;
}

JogoDAO.prototype.gerarParametros = function (usuario) {
    this.connection.collection('jogo', function (error, collection) {
        collection.insertOne({
            usuario: usuario,
            moeda: 15,
            suditos: 10,
            temor: Math.floor(Math.random() * 1000),
            sabedoria: Math.floor(Math.random() * 1000),
            comercio: Math.floor(Math.random() * 1000),
            magia: Math.floor(Math.random() * 1000)
        });
    });
};

JogoDAO.prototype.iniciaJogo = function (res, usuario, casa) {
    this.connection.collection('jogo', function (error, collection) {
        collection.find({
            usuario: usuario
        }).toArray(function (error, result) {
            res.render('jogo', {
                img_casa: casa,
                jogo: result[0]
            });
        });
    });
};

module.exports = function () {
    return JogoDAO;
};