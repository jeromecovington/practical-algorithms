/* eslint no-mixed-operators: 0 */

import visit from "./visit";

import compare from "./compare";
import swap from "./swap";

export default function ponySort(data) {
  const sorted = data.slice();

  data.forEach(() => {
    const min = 0;
    const max = data.length;
    const indexA = Math.random() * (max - min) + min;
    const indexB = Math.random() * (max - min) + min;
    const compared = visit(data, [indexA, indexB], compare);

    if (compared !== 0) {
      swap(sorted, indexA, indexB);
    }
  });

  return sorted;
}
