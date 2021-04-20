# StreamSum Stripe

#### 1. Executing a server
1) node server.js 

#### 2. Testing Purchase.
2) http://127.0.0.1:52273/purchaseTest

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

#### 5. Todo
1) authentication
2) event handler
3) exception handler
4) logging 
5) containerlization
6) cloud and devops
7) process diagrams 
