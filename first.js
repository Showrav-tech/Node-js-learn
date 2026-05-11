// math.js (CommonJS)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};

// app.js (CommonJS)
const math = require('./math');
console.log(math.add(5, 3)); // 8