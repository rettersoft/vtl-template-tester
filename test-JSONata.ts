import jsonata from 'jsonata'

const state = {
    "public": {
        "publicKey": "hfghgfjghkjhljhkjhkjhjhgdffg"
    },
    "private": {
        "secretKey": "dfgdfgdfşgmdsklfmsdşlfsmdf",
        "secondSecretKey": "dfgdfgdfşgmdsklfmsdşlfsmdf",
        "product": {
            "name": "product name",
            "price": 100
        }
    }
};

(() => {
    var expression = jsonata("private.product");
    var result = expression.evaluate(state);  // returns 24
    console.log(result);
})()