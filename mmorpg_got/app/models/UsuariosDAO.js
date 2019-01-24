function UsuariosDAO(connection) {
    this.connection = connection;
}

UsuariosDAO.prototype.inserirUsuario = function (usuario) {
    this.connection.collection('usuarios', function (error, collection) {
        collection.insertOne(usuario, function (error, document) {
            console.log(error);
        });

        console.log(error);
    });

};

module.exports = function () {
    return UsuariosDAO;
};