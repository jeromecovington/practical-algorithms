/* global describe, it */

import chai from 'chai';

import ponySort from '../ponySort';

const expect = chai.expect;

describe('pony sort', () => {
  it('should not return the sorted array', () => {
    const data = [3, 2, 6, 7, 8, 0];
    const expected = [0, 2, 3, 6, 7, 8];

    expect(ponySort(data)).to.not.deep.equal(expected);
  });
});
