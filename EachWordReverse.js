let sentence = "I love JavaScript";
let result = sentence
  .split(' ')
  .map(word => word.split('').reverse().join(''))
  .join(' ');

console.log(result);
//
console.log("test 1");
console.log("test 2");
console.log("test 3");
console.log("test 4");
console.log("test 5");