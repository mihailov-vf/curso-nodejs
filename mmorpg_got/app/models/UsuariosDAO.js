function UsuariosDAO(connection) {
    this.connection = connection;
}

UsuariosDAO.prototype.inserirUsuario = function (usuario) {
    this.connection.collection('usuarios', function (error, collection) {
        collection.insertOne(usuario);
    });
};

UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
    this.connection.collection('usuarios', function (error, collection) {
        collection.find({
            usuario: usuario.usuario,
            senha: usuario.senha
        }).toArray(function (error, result) {
            if (!result[0]) {
                res.render('index', {
                    validacao: [{
                        msg: 'O usuário não foi encontrado'
                    }]
                });
                return;
            }

            req.session.autorizado = true;
            req.session.usuario = result[0].usuario;
            req.session.casa = result[0].casa;

            res.redirect('/jogo');
        });
    });
};

module.exports = function () {
    return UsuariosDAO;
};