/*
1. date: 
    05.14.21

2. developer:
    Haan Mo Johng (haan@digitaltwinlabs.com)

3. descriptions:
    This is a temporal API for testing authorization for the transfer API. 
    This returns admin token

*/

// 1. init Stripe configuration
require('dotenv').config();
const { response } = require('express');

// 2. init middlewares
const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');


// 3. init a router wrapper.
var getAdminTokenWrapper = function (data) {
    initRouters();
    return router;
} 

// 4. init post 
function initRouters () {
    // return admin token
    router.get('/', (request, response) => {
        let privateKey = fs.readFileSync('./private.pem', 'utf8');
        let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: 'HS256'});
        response.send(token);
    });
}

// 5. exports a wrapper
exports.getAdminTokenWrapper = getAdminTokenWrapper;

