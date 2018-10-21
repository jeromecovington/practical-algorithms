const compare = require('./compare');

module.exports = function tally(data, callback) {
  const visited = [];

  const tallied = data.map((tallyItemValue, tallyItemIndex) => {
    if (visited.indexOf(tallyItemValue) === -1) {
      const tallyItemData = [[tallyItemValue], 0];
      const compared = {};

      compared[tallyItemValue] = [];

      data.forEach((toCompareValue, toCompareIndex) => {
        const comparison = compare(tallyItemValue, toCompareValue);

        if (tallyItemIndex !== toCompareIndex) {
          if (comparison === 0) {
            tallyItemData[0].push(toCompareValue);
          } else if (compared[tallyItemValue].indexOf(toCompareValue) === -1) {
            if (comparison === -1) tallyItemData[1] += 1;

            compared[tallyItemValue].push(toCompareValue);
          }
        }
      });

      visited.push(tallyItemValue);

      return tallyItemData;
    }

    return null;
  });

  const filtered = tallied.filter(item => item != null);

  if (callback) {
    return callback(filtered);
  }

  return filtered;
};
