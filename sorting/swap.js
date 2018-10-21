/* eslint no-param-reassign: 0 */
module.exports = function swap(data, a, b) {
  const memberA = data[a];
  const memberB = data[b];

  data[b] = memberA;
  data[a] = memberB;

  return data;
};
