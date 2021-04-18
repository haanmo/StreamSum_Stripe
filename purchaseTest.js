/*
1. date: 
    04.17.21

2. developer:
    Haan Mo Johng (haan@digitaltwinlabs.com)

3. descriptions:
    Implementing a test page for testing Stripe Purchase functionality
*/

// 1. init Stripe configuration
require('dotenv').config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require('stripe')(stripeSecretKey);
const { response } = require('express');

// 2. init middlewares
var express = require('express');
var router = express.Router();

// 3. init a router wrapper.
var purchaseTestWrapper = function (data) {
    initRouters();
    return router;
} 

// 4. init post 
function initRouters () {
    // /transfer
    router.get('/', function (request, response) {
        response.render('purchaseTestForm.ejs', {
            stripePublicKey: stripePublicKey
        });
    });
}

// 6. exports a wrapper
exports.purchaseTestWrapper = purchaseTestWrapper;

