/*
1. date: 
    04.16.21
    05.14.21

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
const express = require('express');
const app = express();
const port = 52273;

// 2. init middlewares
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// 3. init router
app.use('/transfer', require('./transfer.js').transferWrapper());
app.use('/purchase', require('./purchase.js').purchaseWrapper());
app.use('/purchaseTest', require('./purchaseTest.js').purchaseTestWrapper()); // testing purpose
app.use('/getAdminToken', require('./getAdminToken.js').getAdminTokenWrapper()); // testing purpose

// 4. start a server
app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:%s', port);
});
