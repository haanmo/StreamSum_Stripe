# StreamSum Stripe

#### 1. Executing a server
1) node server.js 

#### 2. Testing Purchase.
1) http://localhost/purchaseTest
2) testing credit card information
    1) number: 4242 4242 4242 4242 4242, 
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

#### 5. Authentication
1) Authentication is not added yet, so testing API Keys are used here. 
2) Anyone can purchase with "testing" credit card offered by Stripe.
3) Anyone can transfer "testing" funds to any Stripe "testing" account.

#### 6. Todo
1) authentication
2) event handler
3) exception handler
4) logging 
5) containerlization
6) cloud and devops
7) process diagrams 
