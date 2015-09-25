// Carrega a biblioteca HTTP do Node.js.
var http = require('http');
// Cria um servi�o web para tratar a requisi��o de resposta da mensagem Hello World.
var server = http.createServer(function (request, response) {
  // Define os par�metros de cabe�alho de resposta.
  response.writeHead(200, {'Content-Type': 'text/html'});
  // Escreve uma mensagem de resposta do servidor.
  response.write('<html><body><h1>teste</h1></body></html>');
  // Envia uma resposta para o cliente
  response.end();
}); 
// Define a porta e IP que ser� executado a aplica��o.
server.listen(3000);
// Imprime mensagem no terminal do servidor.
console.log('Servidor Node.js em execucao');