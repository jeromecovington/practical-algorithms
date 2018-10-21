/* eslint-disable prefer-arrow-callback */

const {
    describe,
    it,
} = require('mocha');
const { expect } = require('chai');

const primes = require('../primes');

describe('Primes up to limit', function () {
  it('should return array of primes up to limit', function () {
    expect(primes(25)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  });
});
