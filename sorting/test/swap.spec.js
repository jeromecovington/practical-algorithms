/* global describe, it */

import { expect } from "chai";

import swap from "../swap";

describe("swap", () => {
  it("should mutate and return the array with swapped members at the defined indexes", () => {
    const data = [0, 3, 2, 6, 7, 8];
    const expected = [0, 2, 3, 6, 7, 8];

    expect(swap(data, 2, 1)).to.be.deep.equal(expected);
  });
});
