/* global beforeEach */
/* eslint-disable prefer-arrow-callback */

import { describe, it } from 'mocha';

import { expect } from 'chai';
import LinkedList from '../linked-list';
import Node from '../linked-list-node';

describe('Linked list class', function () {
  describe('constructor', function () {
    it('Should throw if constructor called w/wrong argument', function () {
      expect(function () {
        const foo = new LinkedList('foo'); // eslint-disable-line
      }).to.throw('LinkedList constructor was not called with a Node or Array as its argument.');
    });

    it('Should assign root if constructor called w/argument', function () {
      const a = new Node('a');
      const foo = new LinkedList(a);
      expect(foo.root).to.equal(a);

      const b = new Node('b');
      const bar = new LinkedList([b]);
      expect(bar.root).to.equal(b);
    });
  });

  describe('methods', function () {
    let a;
    let b;
    let c;

    beforeEach(function () {
      a = new Node('a');
      b = new Node('b');
      c = new Node('c');
    });

    it('should, provided with data, delete node from list', function () {
      const foo = new LinkedList([a, b, c]);
      foo.delete('b');
      expect(foo.walk()).to.deep.equal(['a', 'c']);
    });

    it('should, provided with data, get node from list', function () {
      const foo = new LinkedList([a, b, c]);
      expect(foo.get('b')).to.equal(b);
    });

    it('should walk list, and return an array of data', function () {
      const foo = new LinkedList([a, b, c]);
      expect(foo.walk()).to.deep.equal(['a', 'b', 'c']);
    });

    it('should, provided with prior data, insert a node', function () {
      const foo = new LinkedList([a, b, c]);
      const x = new Node('x');
      foo.insert('b', x);
      expect(foo.walk()).to.deep.equal(['a', 'b', 'x', 'c']);
    });

    it('should push to the end of the list', function () {
      const foo = new LinkedList([a, b, c]);
      const x = new Node('x');
      foo.push(x);
      expect(foo.walk()).to.deep.equal(['a', 'b', 'c', 'x']);
    });

    it('should unshift to the front of the list', function () {
      const foo = new LinkedList([a, b, c]);
      const x = new Node('x');
      foo.unshift(x);
      expect(foo.walk()).to.deep.equal(['x', 'a', 'b', 'c']);
    });
  });
});
