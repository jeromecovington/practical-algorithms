/* eslint-disable prefer-arrow-callback */

import { describe, it } from 'mocha';

import { expect } from 'chai';
import binarySearch from '../binary-search';
import primes from '../primes';

describe('Binary search', function () {
  it('should return index of the correct guess', function () {
    expect(binarySearch(primes(25), 17)).to.equal(6);
  });

  it('should return -1 if no feasible correct guess', function () {
    expect(binarySearch(primes(25), 15)).to.equal(-1);
  });
});
