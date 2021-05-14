/*
1. date: 
    04.16.21
    05.14.21

2. developer:
    Haan Mo Johng (haan@digitaltwinlabs.com)

3. descriptions:
    Implementing Stripe functionalities
        1) Get payments from campaign managers
        2) Send funds to Streamers (Stripe Trasfer)

4. REST API descriptions:
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

5. Authorization:
    1) testing transfer without an authorization using curl
        curl --header "Content-Type: application/json" \
        --request POST \
        --data '{"transactions" : [{"amount": 1000, "currency": "usd", "destination": "acct_1Ig9pFDF9rpSOoTJ"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgiZcRYUvZIwhF1"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgisLRl8zXKW68x"}]}' \
        http://127.0.0.1:52273/transfer

    2) testing transfer with an authorization using curl
        curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MjA5NzA2MzJ9.qcb7YG2v8gFD4hWFIuBgDXLaQaUKk-suGQaig2jUHdk" \
        --header "Content-Type: application/json" \
        --request POST \
        --data '{"transactions" : [{"amount": 1000, "currency": "usd", "destination": "acct_1Ig9pFDF9rpSOoTJ"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgiZcRYUvZIwhF1"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgisLRl8zXKW68x"}]}' \
        http://127.0.0.1:52273/transfer


6. Todo
    1) Exception handling
    2) Logging

7. Reference
    1) JWT tutorial: https://www.youtube.com/watch?v=0g0Of8jlhN8
*/

// 1. init Stripe configuration
require('dotenv').config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require('stripe')(stripeSecretKey);
const { response } = require('express');

// 2. init middlewares
const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');

// 3. init a router wrapper.
var transferWrapper = function (data) {
    initRouters();
    return router;
} 

// 4. init post 
function initRouters () {
    // /transfer
    router.post('/', isAuthorized, async function (request, response) {
        var transactions = request.body.transactions;
        for (var i in transactions) {
            const result = await createTransfers(transactions[i], response);
        }
    });
}

// 5. define an authorization
function isAuthorized(request, response, next) {
    if (typeof request.headers.authorization !== "undefined") {
        let token = request.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync('./private.pem', 'utf8');
        jwt.verify(token, privateKey, {algorithm: "HS256"}, (error, decoded) => {
            if(error) response.status(500).json({error: "Not Authorized"});
            console.log(decoded);
            return next();
        });
    } else {
        response.status(500).json({error: "Not Authorized"});
    }
}

// 6. transfer fund to a destination account.
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
        console.log('Charge Fail');
        resposne.status(500).end();
    }); 
}

// 6. exports a wrapper
exports.transferWrapper = transferWrapper;

