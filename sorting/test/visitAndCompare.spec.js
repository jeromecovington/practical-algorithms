/* global describe, it */

const chai = require('chai');

const visit = require('../visit');
const compare = require('../compare');

const expect = chai.expect;

describe('visit and compare', () => {
  it('should return the result of comparing the specified members', () => {
    expect(visit([1, 2, 3], [0, 2], compare)).to.equal(-1);
  });
});
