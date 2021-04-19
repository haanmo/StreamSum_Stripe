# Stripe for StreamSum

1. Execution <br />
    1) node server.js <br />
<br />
2. Testing. <br />
    1) Purchase functionality. <br />
        http://127.0.0.1:52273/purchaseTest <br />
    2) Transfer functionality using Postman. <br />
        2-1) Post. http://localhost:52273/transfer <br />
        2-2) click Body, Raw, and then JSON <br />
        2-3) copy and paste below <br />
'''
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
'''
5. Todo <br />
    1) exception handling
    2) logging
