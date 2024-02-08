/* eslint-disable prefer-arrow-callback */

import { expect } from "chai";
import Node from "../bst-node";
import BinaryTree from "../bst";

describe("BinaryTree class", function () {
  it("should insert nodes correctly", function () {
    const tree = new BinaryTree(new Node(10));
    tree.insert(new Node(5));
    tree.insert(new Node(15));

    expect(tree.getSize()).to.equal(3);
  });

  it("should delete nodes correctly", function () {
    const tree = new BinaryTree(new Node(10));
    tree.insert(new Node(5));
    tree.insert(new Node(15));

    tree.delete(tree.root, 5);

    expect(tree.getSize()).to.equal(2);
    expect(tree.get(5)).to.be.undefined;
  });

  it("should return correct node for given data", function () {
    const tree = new BinaryTree(new Node(10));
    tree.insert(new Node(5));
    tree.insert(new Node(15));

    const node = tree.get(5);

    expect(node.getData()).to.equal(5);
  });

  it("should verify whether it satisfies BST constraints", function () {
    const tree = new BinaryTree(new Node(10));
    tree.insert(new Node(5));
    tree.insert(new Node(15));

    expect(tree.isBST(tree.root, -Infinity, Infinity)).to.be.true;
  });
});
