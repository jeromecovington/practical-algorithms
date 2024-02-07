/* global describe, it */

import chai from 'chai';

import bubbleSort from '../bubbleSort';

const expect = chai.expect;

describe('bubble sort', () => {
  it('should return the sorted array, from an input array of unique members', () => {
    const data = [3, 2, 6, 7, 8, 0];
    const expected = [0, 2, 3, 6, 7, 8];

    expect(bubbleSort(data)).to.deep.equal(expected);
  });

  it('should return the sorted array, from an input array of duplicate members', () => {
    const data = [3, 3, 2, 2, 6, 6, 7, 7, 8, 8, 0, 0];
    const expected = [0, 0, 2, 2, 3, 3, 6, 6, 7, 7, 8, 8];

    expect(bubbleSort(data)).to.deep.equal(expected);
  });

  it('should return the sorted array, from an input array of unique and duplicate members', () => {
    const data = [3, 2, 2, 6, 6, 7, 8, 8, 0];
    const expected = [0, 2, 2, 3, 6, 6, 7, 8, 8];

    expect(bubbleSort(data)).to.deep.equal(expected);
  });
});
