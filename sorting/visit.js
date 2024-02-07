export default function (arr, indexes, callback) {
  const members = [];

  indexes.forEach((i) => {
    members.push(arr[i]);
  });

  if (callback) {
    return callback(...members);
  }

  return members;
}
