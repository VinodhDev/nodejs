var http = require('http');

// Create a server object:
http.createServer(function (req, res) {
  res.write('Automate check Now !!!  '); // Write a response to the client
  res.end(); // End the response
}).listen(80); // The server object listens on port 80
