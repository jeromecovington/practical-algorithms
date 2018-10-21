/**
 * Takes a representation of a binary number and converts it to decimal
 *
 * @param {Number} binary - representation of a binary number (only 1s and 0s)
 * @returns {Number} decimal conversion
 */
module.exports = function binaryToDecimal(binary) {
  const str = binary.toString();
  const arr = str.split('');
  const rev = arr.reverse();
  let decimal = 0;

  rev.forEach((value, index) => {
    if (value === '1') {
      decimal += 2 ** index;
    }
  });

  return decimal;
};
