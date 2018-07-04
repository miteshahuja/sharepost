const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/share-post/')));

// API location
app.use('/api', api);
// app.get('/api', (req, res) => {
//     res.sendFile(path.join(__dirname, 'server/routes/api.js'));
// });

// Send all other requests to the Angular app

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/share-post/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function(){
    console.log(`Running on localhost:${port}`)
});
