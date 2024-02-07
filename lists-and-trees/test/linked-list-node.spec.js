/* eslint-disable prefer-arrow-callback */

import { describe, it } from "mocha";

import { expect } from "chai";
import Node from "../linked-list-node";

describe("Linked list Node class", function () {
  it("should construct with passed data", function () {
    const a = new Node("a");

    expect(a.getData()).to.equal("a");
  });

  it("should allow to set next", function () {
    const a = new Node("a");
    const b = new Node("b");

    a.setNext(b);
    expect(a.getNext().getData()).to.equal("b");
  });

  it("should set next to null by default", function () {
    const a = new Node("a");

    a.setNext();
    expect(a.getNext()).to.equal(null);
  });
});
