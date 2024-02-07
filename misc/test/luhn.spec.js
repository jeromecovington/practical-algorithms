/* eslint-disable prefer-arrow-callback */

import { describe, it } from "mocha";

import { expect } from "chai";
import luhn from "../luhn";

describe("Luhn algorithm", function () {
  it("should return true for valid numbers", function () {
    expect(luhn(79927398713)).to.equal(true);
    expect(luhn(347136731693028)).to.equal(true);
  });

  it("should return false for invalid numbers", function () {
    expect(luhn(79927398710)).to.equal(false);
    expect(luhn(79927398711)).to.equal(false);
    expect(luhn(79927398712)).to.equal(false);
  });
});
