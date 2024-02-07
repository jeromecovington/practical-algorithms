/* global describe, it */

import chai from 'chai';

import sortByLessThanTally from '../sortByLessThanTally';

const expect = chai.expect;


describe('sort by less than tally', () => {
  it('should return the members sorted into place', () => {
    const data = [[3, 3], [2, 4], [6, 2], [7, 1], [8, 0], [0, 5]];

    expect(sortByLessThanTally(data)).to.deep.equal([0, 2, 3, 6, 7, 8]);
  });

  it('should return multiple identical members sorted into place', () => {
    const data = [[[3, 3], 3], [[2, 2], 4], [[6, 6], 2], [[7, 7], 1], [[8, 8], 0], [[0, 0], 5]];

    expect(sortByLessThanTally(data)).to.deep.equal([0, 0, 2, 2, 3, 3, 6, 6, 7, 7, 8, 8]);
  });
});
