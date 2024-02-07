import visit from "./visit";
import compare from "./compare";
import swap from "./swap";

export default function bubbleSort(data) {
  let sorted = data.slice();

  function sort() {
    const hasSwappedAny = [];

    for (let i = sorted.length - 1; i > 0; i -= 1) {
      const compared = visit(sorted, [i, i - 1], compare);

      if (compared === -1) {
        sorted = swap(sorted, i, i - 1);
        hasSwappedAny.push(true);
      } else {
        hasSwappedAny.push(false);
      }
    }

    if (hasSwappedAny.indexOf(true) !== -1) {
      sort();
    }
  }

  sort();

  return sorted;
}
