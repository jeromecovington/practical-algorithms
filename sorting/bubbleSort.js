const visit = require('./visit');
const compare = require('./compare');
const swap = require('./swap');

module.exports = function bubbleSort(data) {
  let sorted = data.slice();

  function sort() {
    const hasSwappedAny = [];

    for (let i = sorted.length - 1; i > 0; i -= 1) {
      const compared = visit(sorted, [i, i - 1], compare);

      if (compared === -1) {
        sorted = swap(sorted, i, i - 1);
        hasSwappedAny.push(true);
      } else {
        hasSwappedAny.push(false);
      }
    }

    if (hasSwappedAny.indexOf(true) !== -1) {
      sort();
    }
  }

  sort();

  return sorted;
};
