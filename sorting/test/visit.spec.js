/* global describe, it */

import chai from 'chai';

import visit from '../visit';

const expect = chai.expect;

describe('visit', () => {
  it('should return the members at the defined indexes if no callback provided', () => {
    expect(visit([1, 2, 3], [0, 2])).to.deep.equal([1, 3]);
  });

  it('should return the return value of the callback if provided', () => {
    expect(visit([1, 2, 3], [0, 2], (a, b) => a + b)).to.equal(4);
  });
});
