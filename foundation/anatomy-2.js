// Anonymous function
(function (a, b, c) {
  return a + b + c;
});
// Function expression
const sum = function (a, b) {
  return a + b;
};

const result = sum(7, 59);
console.log(result); // Outputs: 6

const anotherSum = sum;
console.log(anotherSum(5, 9));

let x = 3;
console.log(x); // Outputs:

x = sum;
console.log(x(11, 16));
