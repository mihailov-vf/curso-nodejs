var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('<html><body>Notícias</body></html>');
});

server.listen(3000);