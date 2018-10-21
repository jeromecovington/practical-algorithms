var primesUpToLimit = require('./primesUpToLimit');

// Assumed that item is a unique value in arr.
function binarySearch(arr, item) {
  var itemIndex = arr.indexOf(item);
  var min = 0;
  var max = arr.length - 1;
  while (max >= min) {
    let guess = Math.round((max + min)/2);
    if (guess === itemIndex) {
      return guess;
    } else if (itemIndex < guess) {
      max--;
    } else if (itemIndex > guess) {
      min++;
    }
  }
  return -1;
}

print(binarySearch(primesUpToLimit(25), 17));
