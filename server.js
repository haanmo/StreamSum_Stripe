/*
1. date: 
    04.16.21

2. developer:
    Haan Mo Johng (haan@digitaltwinlabs.com)

3. descriptions:
    Run a Node Js server

4. Todo
    1) Exception handling
    2) Logging

5. Execution
    node server.js
*/

// 1. init node js express
var express = require('express');
var app = express();

// 2. init middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// 3. init router
app.use('/transfer', require('./transfer.js').transferWrapper());
app.use('/purchase', require('./purchase.js').purchaseWrapper());
app.use('/purchaseTest', require('./purchaseTest.js').purchaseTestWrapper());

// 4. start a server
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
