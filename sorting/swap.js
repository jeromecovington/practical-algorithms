/* eslint no-param-reassign: 0 */
export default function swap(data, a, b) {
  const memberA = data[a];
  const memberB = data[b];

  data[b] = memberA;
  data[a] = memberB;

  return data;
}
