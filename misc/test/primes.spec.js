/* eslint-disable prefer-arrow-callback */

import { describe, it } from "mocha";

import { expect } from "chai";
import primes from "../primes";

describe("Primes up to limit", function () {
  it("should return array of primes up to limit", function () {
    expect(primes(25)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  });
});
