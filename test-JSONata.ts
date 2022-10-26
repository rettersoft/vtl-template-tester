import jsonata from 'jsonata'

const state = {
  example: [{ value: 4 }, { value: 7 }, { value: 13 }],
};

(() => {
    var expression = jsonata("$sum(example.value)");
    var result = expression.evaluate(state);  // returns 24
    console.log(result);
})()