/* global describe, it */

import chai from 'chai';

import visit from '../visit';
import compare from '../compare';

const expect = chai.expect;

describe('visit and compare', () => {
  it('should return the result of comparing the specified members', () => {
    expect(visit([1, 2, 3], [0, 2], compare)).to.equal(-1);
  });
});
