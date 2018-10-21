/* jshint esnext: true */
// primesUpToLimit(25);
// [2, 3, 5, 7, 11, 13, 17, 19, 23]

function primesUpToLimit(limit) {
  var primesArray = [];
  
  outerLoop:
  for (let i = 2; i <= limit; i++) {    
    if (i != 2 && i % 2 === 0) {
      continue;
    }
    
    let sqrt = Math.sqrt(i);
    
    for (let j = 3; j <= sqrt; j++) {
      if (i % j === 0) {
        continue outerLoop;
      }
    }
    
    primesArray.push(i);
  }
  
  return primesArray;
}

print('Prime numbers up to 25:');
print(primesUpToLimit(25));

module.exports = primesUpToLimit;
