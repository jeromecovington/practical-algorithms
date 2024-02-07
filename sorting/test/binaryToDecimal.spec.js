/* global describe, it */

import { expect } from 'chai';

import binaryToDecimal from '../binaryToDecimal';

describe('binary to decimal', () => {
  it('should convert from binary representation to decimal', () => {
    expect(binaryToDecimal(0)).to.equal(0);
    expect(binaryToDecimal(10111)).to.equal(23);
    expect(binaryToDecimal(101010)).to.equal(42);
    expect(binaryToDecimal(11111111)).to.equal(255);
  });
});

