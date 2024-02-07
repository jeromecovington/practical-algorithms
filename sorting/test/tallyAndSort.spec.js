/* global describe, it */

import { expect } from "chai";

import tally from "../tally";
import sort from "../sortByLessThanTally";

describe("tally and sort", () => {
  it("should return the sorted array, from an input array of unique members", () => {
    const data = [3, 2, 6, 7, 8, 0];
    const expected = [0, 2, 3, 6, 7, 8];

    expect(tally(data, sort)).to.deep.equal(expected);
  });

  it("should return the sorted array, from an input array of duplicate members", () => {
    const data = [3, 3, 2, 2, 6, 6, 7, 7, 8, 8, 0, 0];
    const expected = [0, 0, 2, 2, 3, 3, 6, 6, 7, 7, 8, 8];

    expect(tally(data, sort)).to.deep.equal(expected);
  });

  it("should return the sorted array, from an input array of unique and duplicate members", () => {
    const data = [3, 2, 2, 6, 6, 7, 8, 8, 0];
    const expected = [0, 2, 2, 3, 6, 6, 7, 8, 8];

    expect(tally(data, sort)).to.deep.equal(expected);
  });
});
