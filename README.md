# Stripe for StreamSum

1. Execution
    node server.js

2. Testing.
    1) Purchase functionality.
        http://127.0.0.1:52273/purchaseTest
    2) Transfer functionality using Postman.
        2-1) Select Post. 
        2-2) Type http://localhost:52273/transfer
        2-3) click Body
        2-4) click raw and JSON
        2-5) copy and paste below
                
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