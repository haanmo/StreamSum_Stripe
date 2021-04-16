/*
1. date: 
    04.16.21

2. developer:
    Haan Mo Johng (haan@digitaltwinlabs.com)

3. descriptions:
    Run a Node Js server
*/

// 1. init node js express
var express = require('express');
var app = express();

// 2. init middlewares
app.use(express.json());

// 3. init router
app.use('/transfer', require('./Transfer.js').transferWrapper());

// 4. start a server
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});
