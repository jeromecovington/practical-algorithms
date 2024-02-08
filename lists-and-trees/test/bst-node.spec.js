/* eslint-disable prefer-arrow-callback */

import { expect } from "chai";
import Node from "../bst-node";

describe("BinaryTree Node class", function () {
  let node;

  beforeEach(function () {
    node = new Node(10);
  });

  it("should set and get data correctly", function () {
    node.setData(20);

    expect(node.getData()).to.equal(20);
  });

  it("should set and get left node correctly", function () {
    const leftNode = new Node(5);
    node.setLeft(leftNode);

    expect(node.getLeft()).to.equal(leftNode);
  });

  it("should set and get right node correctly", function () {
    const rightNode = new Node(15);
    node.setRight(rightNode);

    expect(node.getRight()).to.equal(rightNode);
  });
});
