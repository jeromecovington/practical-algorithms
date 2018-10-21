const Node = require('./linked-list-node');

module.exports = class LinkedList {
  constructor(n) {
    if (n && Array.isArray(n) && n.length) {
      n.forEach((current, i) => {
        if (i === 0) {
          this.root = current;
        }
        current.setNext(n[i + 1]);
      });
    } else if (n instanceof Node) {
      this.root = n;
    } else {
      throw new Error('LinkedList constructor was not called with a Node or Array as its argument.');
    }
  }

  delete(data) {
    let current = this.root;
    let previous;

    while (current.getNext()) {
      if (current.getData() === data) {
        const next = current.getNext();

        previous.setNext(next);
        current.setNext(null);
      } else {
        previous = current;
        current = current.getNext();
      }
    }
  }

  /* eslint-disable consistent-return */
  get(data) {
    let current = this.root;

    while (current.getNext()) {
      if (current.getData() === data) {
        return current;
      }
      current = current.getNext();
    }
  }
  /* eslint-enable */

  insert(beforeData, n) {
    const before = this.get(beforeData);
    const next = before.getNext();

    before.setNext(n);
    n.setNext(next);
  }

  push(n) {
    let current = this.root;
    let last;

    while (current) {
      if (current.getNext() === null) {
        last = current;
        last.setNext(n);
        n.setNext(null);
        return;
      }
      current = current.getNext();
    }
  }

  unshift(n) {
    const first = this.root;

    n.setNext(first);
    this.root = n;
  }

  walk() {
    let current = this.root;
    const walked = [];

    while (current) {
      walked.push(current.getData());
      current = current.getNext();
    }

    return walked;
  }
};
