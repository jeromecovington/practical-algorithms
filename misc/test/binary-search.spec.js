/* eslint-disable prefer-arrow-callback */

const {
    describe,
    it,
} = require('mocha');
const { expect } = require('chai');

const binarySearch = require('../binary-search');
const primes = require('../primes');

describe('Binary search', function () {
  it('should return index of the correct guess', function () {
    expect(binarySearch(primes(25), 17)).to.equal(6);
  });

  it('should return -1 if no feasible correct guess', function () {
    expect(binarySearch(primes(25), 15)).to.equal(-1);
  });
});
