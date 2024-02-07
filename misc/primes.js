/* eslint-disable */
export default function primes(limit) {
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
};
/* eslint-enable */
