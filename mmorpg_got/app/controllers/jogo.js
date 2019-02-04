module.exports.jogo = function (application, req, res) {
    if (!req.session.autorizado) {
        res.redirect('/');
        return;
    }

    var connection = application.config.dbConnection;
    var jogoDAO = new application.app.models.JogoDAO(connection);
    var usuario = req.session.usuario;
    var casa = req.session.casa;

    jogoDAO.iniciaJogo(res, usuario, casa);
};

module.exports.sair = function (application, req, res) {
    req.session.destroy(function (error) {
        res.redirect('/');
    });
};

module.exports.suditos = function (application, req, res) {
    res.render('aldeoes', {});
};

module.exports.pergaminhos = function (application, req, res) {
    res.render('pergaminhos', {});
};