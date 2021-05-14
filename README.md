# StreamSum Stripe

#### 1. Project description
1) Providing APIs for financial transactions. 
1) REST APIs using Node JS and Stripe.

#### 2. Service APIs
1) 127.0.0.1/purchase
    1) Make a payment using Stripe.

2) 127.0.0.1/transfer 
    1) Transfer funds from aStripe account to other Connected Stripe accounts.

#### 3. Temporal APIs for testing purposes
1) 127.0.0.1/purchaseTest
    1) A temporal API for testing payment functionality. 
    2) Input the amount of payment and click the button. 

2) 127.0.0.1/getAdminToken
    1) A temporal API to get an Admin Token for authorizing transactions.
    2) Return an Admin Token

#### 4. File descriptions
1) servicer.js: initialize a server and the APIs.
2) purchase.js: implement the /purchase API
3) transfer.js: implement the /transfer API
4) purchaseTest.js: implement the /purchaseTest API
5) getAdminToken.js: implement the /getAdminToken API
6) private.pem and private.pem.pub: a temporal token to authorize transfer transactions

#### 5. Execution step 1 - Executing a server
1) node server.js 

#### 6. Execution step 2 - Testing Purchase.
1) http://localhost/purchaseTest
2) the information of testing credit card
    1) card number: 4242 4242 4242 4242, 
    2) exp: 12/21 (any date later than now) 
    3) cvv: 123 (any number)

#### 7. Execution step 3 - Testing Transfer using Postman.
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
4) In the header, input the admin token information below. 
    1) "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MjA5NzA2MzJ9.qcb7YG2v8gFD4hWFIuBgDXLaQaUKk-suGQaig2jUHdk"

#### 7. Execution step 3 - Testing Transfer using curl.
1) testing transfer without an authorization using curl.
```
curl --header "Content-Type: application/json" \
--request POST \
--data '{"transactions" : [{"amount": 1000, "currency": "usd", "destination": "acct_1Ig9pFDF9rpSOoTJ"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgiZcRYUvZIwhF1"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgisLRl8zXKW68x"}]}' \
        http://127.0.0.1:52273/transfer
```
2) testing transfer with an authorization using curl.
```
curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MjA5NzA2MzJ9.qcb7YG2v8gFD4hWFIuBgDXLaQaUKk-suGQaig2jUHdk" \
--header "Content-Type: application/json" \
--request POST \
--data '{"transactions" : [{"amount": 1000, "currency": "usd", "destination": "acct_1Ig9pFDF9rpSOoTJ"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgiZcRYUvZIwhF1"}, {"amount": 1000, "currency": "usd", "destination": "acct_1IgisLRl8zXKW68x"}]}' \
http://127.0.0.1:52273/transfer
```

#### 8. Future Work
1) The purchase API does not have any authorization. 
2) Exception handlers and logging are necessary.
