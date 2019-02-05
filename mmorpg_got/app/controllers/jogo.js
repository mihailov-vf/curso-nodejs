module.exports.jogo = function (application, req, res) {
    if (!req.session.autorizado) {
        res.redirect('/');
        return;
    }

    var comando_invalido = 'N';
    if (req.query.comando_invalido) {
        comando_invalido = req.query.comando_invalido;
    }

    var connection = application.config.dbConnection;
    var jogoDAO = new application.app.models.JogoDAO(connection);
    var usuario = req.session.usuario;
    var casa = req.session.casa;

    jogoDAO.iniciaJogo(res, usuario, casa, comando_invalido);
};

module.exports.sair = function (application, req, res) {
    req.session.destroy(function (error) {
        res.redirect('/');
    });
};

module.exports.suditos = function (application, req, res) {
    if (!req.session.autorizado) {
        res.redirect('/');
        return;
    }
    res.render('aldeoes', {});
};

module.exports.pergaminhos = function (application, req, res) {
    if (!req.session.autorizado) {
        res.redirect('/');
        return;
    }
    res.render('pergaminhos', {});
};

module.exports.acaoSudito = function (application, req, res) {
    if (!req.session.autorizado) {
        res.redirect('/');
        return;
    }

    var dadosForm = req.body;

    req.assert('acao', 'A ação deve ser informada').notEmpty();
    req.assert('quantidade', 'A quantidade deve ser informada').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.redirect('/jogo?comando_invalido=S');
        return;
    }

    res.send('Ok');
};