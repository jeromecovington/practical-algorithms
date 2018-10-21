/* eslint-disable prefer-arrow-callback */

const {
  describe,
  it,
} = require('mocha');
const { expect } = require('chai');

const luhn = require('../luhn');

describe('Luhn algorithm', function () {
  it('should return true for valid numbers', function () {
    expect(luhn(79927398713)).to.equal(true);
    expect(luhn(347136731693028)).to.equal(true);
  });

  it('should return false for invalid numbers', function () {
    expect(luhn(79927398710)).to.equal(false);
    expect(luhn(79927398711)).to.equal(false);
    expect(luhn(79927398712)).to.equal(false);
  });
});
