/*
1. date: 
    04.17.21

2. developer:
    Haan Mo Johng (haan@digitaltwinlabs.com)

3. descriptions:
    Implementing a page for Stripe Purchase functionality

4. Todo
    1) Exception handling
    2) Logging

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
var purchaseWrapper = function (data) {
    initRouters();
    return router;
} 

// 4. init post 
function initRouters () {
    // /purchase
    router.post('/', async function (request, response) {
        const result = await createPurchase(request);
    });
}

// 5. transfer fund to a destination account.
const createPurchase = async function (request) {
    stripe.charges.create({  // 
        source: request.body.stripeTokenId,
        amount: request.body.amount,
        currency: request.body.currency
    }).then(function(){
        console.log('Charge Successful');
        response.json({
            message: 'Successfully purchased items'
        })
    }).catch(function() {
        console.log('Purchase Fail');
        resposne.status(500).end();
    })
}

// 6. exports a wrapper
exports.purchaseWrapper = purchaseWrapper;

