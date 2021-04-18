if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    
    // ok
    var priceElement = document.getElementById('test-amount')
    var price = parseFloat(priceElement.value) * 100 
    
    stripeHandler.open({ //
        amount: price // 
    })
    
}

var stripeHandler = StripeCheckout.configure({
    key: stripePublicKey,
    locale: 'en',
    token: function(token) {
        var priceElement = document.getElementById('test-amount')
        var price = parseFloat(priceElement.value) * 100
            
        fetch('/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                stripeTokenId: token.id,
                currency: "usd",
                amount: price
            })
        }).then(function(res) {
            //return res.json()
        }).then(function(data) {
            // alert(data.message)
        }).catch(function(error) {
            //console.error(error)
        })
    }
})
