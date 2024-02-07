// Assumed that item is a unique value in arr.
export default function binarySearch(arr, item) {
  const itemIndex = arr.indexOf(item);
  let min = 0;
  let max = arr.length - 1;
  while (max >= min) {
    const guess = Math.round((max + min) / 2);
    if (guess === itemIndex) {
      return guess;
    } else if (itemIndex < guess) {
      max--; // eslint-disable-line
    } else if (itemIndex > guess) {
      min++; // eslint-disable-line
    }
  }
  return -1;
};
