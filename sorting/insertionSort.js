const visit = require('./visit');
const compare = require('./compare');
const swap = require('./swap');

module.exports = function insertionSort(data) {
  let sorted = data.slice();
  let increment = 1;

  function sort(i) {
    if (sorted[i - 1]) {
      const compared = visit(sorted, [i, i - 1], compare);

      if (compared === -1) {
        sorted = swap(sorted, i, i - 1);
        sort(i - 1);
      } else {
        increment += 1;

        if (increment < sorted.length) {
          sort(increment);
        }
      }
    } else {
      increment += 1;

      if (increment < sorted.length) {
        sort(increment);
      }
    }
  }

  sort(increment);

  return sorted;
};
