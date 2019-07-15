const http = require('http');


http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Jorge',
        edad: 22,
        url: request.url
    }
    response.write(JSON.stringify(salida))
        //response.write('Hola, probando el Web-Server');
    response.end();
})

.listen(8080)

console.log('Escuchando en el puerto 8080');