import jsonata from 'jsonata'

const state = {
    "public": {
        "publicKey": "hfghgfjghkjhljhkjhkjhjhgdffg"
    },
    "private": {
        "secretKey": "dfgdfgdfşgmdsklfmsdşlfsmdf",
        "secondSecretKey": "dfgdfgdfşgmdsklfmsdşlfsmdf",
        "product": {
            "name": "Dalin şampuan",
            "price": 100
        }
    }
};

(() => {
    const simpleExp = jsonata('private.product.name');
    console.log(simpleExp.evaluate(state));


    const expression = jsonata("$customFunc(private.product)");
    expression.registerFunction("customFunc", (p) => p.price > 99 ? "expensive" : "cheap");

    console.log(expression.evaluate(state));
})()

