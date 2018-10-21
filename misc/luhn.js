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
function luhn(number) {
  var isValid = false;
  // coercion
  var arr = number.toString().split('').reverse();
  var mapped = arr.map(function (item, index) {

    item = parseInt(item, 10);
    if ((index + 1) % 2 === 0) {
      item *= 2;
    }
    if (item >= 10) {
      // coercion
      item = parseInt(item.toString().split('')[0], 10) + parseInt(item.toString().split('')[1], 10);
    }

    return item;
  });

  var sum = 0;
  for (var i = 1; i < mapped.length; i++) {
    // coercion
    sum += parseInt(mapped[i], 10);
  }

  // coercion
  var sumArr = sum.toString().split('');
  // coercion
  var unitsDigit = parseInt(sumArr[sumArr.length - 1], 10);
  // coercion
  var checkSum = unitsDigit + parseInt(arr[0], 10);

  if (checkSum % 10 === 0) {
    isValid = true;
  }

  return isValid;
}

// false
// print(luhn(79927398710));
// print(luhn(79927398711));
// print(luhn(79927398712));

// true
print(luhn(79927398713));

// true AmEx
// print(luhn(347136731693028));
