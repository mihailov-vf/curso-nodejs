var http = require('http');

var server = http.createServer(function (req, res) {
    var categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end('<html><body>Notícias de tecnologia</body></html>');
    }
    if (categoria == '/moda') {
        res.end('<html><body>Notícias de moda</body></html>');
    }
    if (categoria == '/beleza') {
        res.end('<html><body>Notícias de beleza</body></html>');
    }

    res.end('<html><body>Portal de notícias</body></html>');
});

server.listen(3000);