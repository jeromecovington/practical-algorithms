/* eslint-disable prefer-arrow-callback */

const {
    describe,
    it,
} = require('mocha');
const { expect } = require('chai');

const Node = require('../linked-list-node');

describe('Linked list Node class', function () {
  it('should construct with passed data', function () {
    const a = new Node('a');

    expect(a.getData()).to.equal('a');
  });

  it('should allow to set next', function () {
    const a = new Node('a');
    const b = new Node('b');

    a.setNext(b);
    expect(a.getNext().getData()).to.equal('b');
  });

  it('should set next to null by default', function () {
    const a = new Node('a');

    a.setNext();
    expect(a.getNext()).to.equal(null);
  });
});
