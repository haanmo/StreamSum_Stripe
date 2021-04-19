/*
1. date: 
    04.16.21

2. developer:
    Haan Mo Johng (haan@digitaltwinlabs.com)

3. descriptions:
    Implementing Stripe functionalities
        1) Get payments from campaign managers
        2) Send funds to Streamers (Stripe Trasfer)

4. REST API descriptions
    1) Post. /tranfer
        1) input to post:  
            a json specifying a list of transactions (amount, currency, and destination)
        2) output from post:
            not specified yet.
        3) input example (using Postman). 1000 means 10 USD
            {
                "transactions" : [
                    {
                        "amount": 1000,
                        "currency": "usd",
                        "destination": "acct_1Ig9pFDF9rpSOoTJ"
                    },
                    {
                        "amount": 1000,
                        "currency": "usd",
                        "destination": "acct_1IgiZcRYUvZIwhF1"
                    },
                    {
                        "amount": 1000,
                        "currency": "usd",
                        "destination": "acct_1IgisLRl8zXKW68x"
                    }
                ]
            }
5. Todo
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
var transferWrapper = function (data) {
    initRouters();
    return router;
} 

// 4. init post 
function initRouters () {
    // /transfer
    router.post('/', async function (request, response) {
        var transactions = request.body.transactions;
        for (var i in transactions) {
            const result = await createTransfers(transactions[i], response);
        }
    });
}

// 5. transfer fund to a destination account.
const createTransfers = async function (transaction, response) {
    const result = stripe.transfers.create({
        amount: transaction.amount,
        currency: transaction.currency,
        destination: transaction.destination
    }).then(function(){
        console.log('Transfer Successful');
        response.json({
            message: 'Successfully Transfer Funds'
        })
    }).catch(function() {
        //console.log('Charge Fail');
        //resposne.status(500).end();
    }); 
}

// 6. exports a wrapper
exports.transferWrapper = transferWrapper;

