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

JogoDAO.prototype.iniciaJogo = function (res, usuario, casa, comando_invalido) {
    this.connection.collection('jogo', function (error, collection) {
        collection.find({
            usuario: usuario
        }).toArray(function (error, result) {
            res.render('jogo', {
                img_casa: casa,
                jogo: result[0],
                comando_invalido: comando_invalido
            });
        });
    });
};

JogoDAO.prototype.acao = function (acao) {
    this.connection.collection('acao', function (error, collection) {
        var tempo = (new Date()).getTime();
        var hora = 60 * 60 * 1000;

        switch (acao.acao) {
            case 1:
                tempo += 1 * hora;
                break;
            case 2:
                tempo += 2 * hora;
                break;
            case 3:
                tempo += 5 * hora;
                break;
            case 4:
                tempo += 5 * hora;
                break;
        }

        acao.termina_em = tempo;
        collection.insertOne(acao);
    });
};

module.exports = function () {
    return JogoDAO;
};