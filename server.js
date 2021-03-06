const PATH_PROJECT = '/dist/calculator';
const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const server = http.createServer(app);

app.use(express.static(__dirname + PATH_PROJECT));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, PATH_PROJECT, 'index.html')));

const SERVER_PORT = 80;

server.listen(process.env.PORT || SERVER_PORT, () => {
  const REAL_PORT = !process.env.PORT ? SERVER_PORT : process.env.PORT;
  console.log(`Running application with Express on port ${REAL_PORT}`);

});
