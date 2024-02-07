export default function (data) {
  const maxIndex = data.length - 1;
  const sorted = [];

  for (let i = 0; i <= maxIndex; i += 1) {
    const tuple = data[i];
    const member = tuple[0];
    const tally = tuple[1];
    const index = maxIndex - tally;

    sorted[index] = member;
  }

  return [].concat(...sorted);
}
