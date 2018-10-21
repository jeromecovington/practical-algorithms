// primesUpToLimit(25);
// [2, 3, 5, 7, 11, 13, 17, 19, 23]
/* eslint-disable */
function primes(limit) {
  const primesArray = [];

  outerLoop:
  for (let i = 2; i <= limit; i++) {
    if (i !== 2 && i % 2 === 0) {
      continue;
    }

    const sqrt = Math.sqrt(i);

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
print(primes(25));

module.exports = primes;
/* eslint-enable */
