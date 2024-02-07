/* global describe, it */

import { expect } from "chai";

import tally from "../tally";

describe("tally", () => {
  it("should create a less than tally for single values", () => {
    const data = [3, 2, 6, 7, 8, 0];
    const expected = [
      [[3], 3],
      [[2], 4],
      [[6], 2],
      [[7], 1],
      [[8], 0],
      [[0], 5],
    ];

    expect(tally(data)).to.deep.equal(expected);
  });

  it("should create a less than tally for multiple values", () => {
    const data = [3, 3, 2, 2, 6, 6, 7, 7, 8, 8, 0, 0];
    const expected = [
      [[3, 3], 3],
      [[2, 2], 4],
      [[6, 6], 2],
      [[7, 7], 1],
      [[8, 8], 0],
      [[0, 0], 5],
    ];

    expect(tally(data)).to.deep.equal(expected);
  });
});
