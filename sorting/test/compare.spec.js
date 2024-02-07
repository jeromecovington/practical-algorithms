/* global describe, it */

import chai from 'chai';

import compare from '../compare';

const expect = chai.expect;

describe('compare', () => {
  it('should return -1 if a < b', () => {
    expect(compare(1, 2)).to.equal(-1);
  });

  it('should return 1 if a > b', () => {
    expect(compare(2, 1)).to.equal(1);
  });

  it('should return 0 if a === b', () => {
    expect(compare(1, 1)).to.equal(0);
  });
});

