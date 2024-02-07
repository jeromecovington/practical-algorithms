/**
 * Verifies number using Luhn algorithm
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * e.g.
 * 79927398710 => false
 * 79927398711 => false
 * 79927398712 => false
 * 79927398713 => true
 * 79927398714 => false
 * 79927398715 => false
 * 79927398716 => false
 * 79927398717 => false
 * 79927398718 => false
 * 79927398719 => false
 * @param {Number} number - the number to validate
 * @returns {Boolean} is the number valid
 */
export default function luhn(number) {
  let isValid = false;
  // coercion
  const arr = number.toString().split("").reverse();
  const mapped = arr.map((item, index) => {
    item = parseInt(item, 10); // eslint-disable-line
    if ((index + 1) % 2 === 0) {
      item *= 2; // eslint-disable-line
    }
    if (item >= 10) {
      // coercion
      item =
        parseInt(item.toString().split("")[0], 10) +
        parseInt(item.toString().split("")[1], 10); // eslint-disable-line
    }

    return item;
  });

  let sum = 0;
  for (let i = 1; i < mapped.length; i++) {
    // eslint-disable-line
    // coercion
    sum += parseInt(mapped[i], 10);
  }

  // coercion
  const sumArr = sum.toString().split("");
  // coercion
  const unitsDigit = parseInt(sumArr[sumArr.length - 1], 10);
  // coercion
  const checkSum = unitsDigit + parseInt(arr[0], 10);

  if (checkSum % 10 === 0) {
    isValid = true;
  }

  return isValid;
}
