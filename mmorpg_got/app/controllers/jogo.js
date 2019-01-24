module.exports.jogo = function (application, req, res) {
    if (!req.session.autorizado) {
        res.redirect('/');
    }

    res.render('jogo');
};

module.exports.sair = function (application, req, res) {
    req.session.destroy(function (error) {
        res.redirect('/');
    });
};