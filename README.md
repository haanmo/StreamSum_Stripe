# StreamSum Stripe

#### 1. Project Description
1) Providing APIs for financial transactions. 
1) REST APIs using Node JS and Stripe.

#### 2. Service APIs
1) 127.0.0.1/purchase: make a payment using Stripe
2) 127.0.0.1/transfer: transfer funds from aStripe account to other Connected Stripe accounts.

#### 3. Temporal APIs for testing purposes
1) 127.0.0.1/purchaseTest


2) 127.0.0.1/getAdminToken


#### 1. Executing a server
1) node server.js 

#### 2. Testing Purchase.
1) http://localhost/purchaseTest
2) the information of testing credit card
    1) card number: 4242 4242 4242 4242, 
    2) exp: 12/21 (any date later than now) 
    3) cvv: 123 (any number)

#### 3. Testing Transfer using Postman.
1) Post. http://localhost:52273/transfer
2) click Body, Raw, and then JSON
3) copy and paste below
```json
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
```

#### 6. Todo
1) exception handler
2) logging 
