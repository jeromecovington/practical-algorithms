import Node from "./bst-node";

export default class BinaryTree {
  constructor(n) {
    // Initialize the tree with either an array of ordered Nodes, each with
    // unique data, or a single Node to set as root.
    if (n && Array.isArray(n) && n.length) {
      n.forEach((current, i) => {
        if (!(current instanceof Node)) {
          throw new Error(
            "BinaryTree constructor was called with an Array with non-Node members.",
          );
        }

        if (i === 0) {
          this.root = current;
        }

        this.insert(n);
      });
      this.size = n.length;
    } else if (n instanceof Node) {
      this.root = n;
      this.size = 1;
    } else {
      throw new Error(
        "BinaryTree constructor was not called with a Node or Array as its argument.",
      );
    }
  }

  getSize() {
    return this.size;
  }

  // Start: Day-Stout-Warren algorithm
  balance(n) {
    let pseudoRoot = new Node();
    pseudoRoot.setRight(n);

    this.treeToVine(n);
    this.vineToTree(n, this.getHeight());

    pseudoRoot.setRight(null);
    pseudoRoot = null;
  }

  treeToVine(n) {
    let tail = n;
    let rest = tail.getRight();

    while (rest !== null) {
      if (rest.getLeft() === null) {
        tail = rest;
        rest = rest.getRight();
      } else {
        const temp = rest.getLeft();

        rest.left = temp.getRight();
        temp.setRight(rest);
        rest = temp;
        tail.setRight(temp);
      }
    }
  }

  vineToTree(n) {
    let sz = this.size;
    const leaves = sz + 1 - Math.pow(2, Math.log2(sz + 1));
    this.compress(n, leaves);
    sz = sz - leaves;

    while (sz > 1) {
      this.compress(n, Math.ceil(sz / 2));
      sz = Math.ceil(sz / 2);
    }
  }

  compress(n, count) {
    let scanner = n;

    for (let i = 1; i <= count; i++) {
      const child = scanner.getRight();
      scanner.setRight(child.getRight());
      scanner = scanner.getRight();
      child.setRight(scanner.getLeft());
      scanner.setLeft(child);
    }
  }
  // End: DSW algorithm

  // Given node with data, insert into tree.
  insert(n) {
    let current = this.root;
    while (current) {
      if (n.getData() === current.getData()) {
        return;
      }

      if (!current.getLeft() && n.getData() < current.getData()) {
        current.setLeft(n);
        return;
      }

      if (!current.getRight() && n.getData() > current.getData()) {
        current.setRight(n);
        return;
      }

      if (current.getLeft()) {
        current = current.getLeft();
      }

      if (current.getRight()) {
        current = current.getRight();
      }
    }

    this.size++;
  }

  getMinimum(n) {
    while (n.getLeft()) {
      n = n.getLeft();
    }

    return n;
  }

  // Given data, deletes node with matching data, and re-sort.
  delete(n, d) {
    let parent = null;
    let current = n;

    while (current && current.getData() !== d) {
      parent = current;

      if (d < current.getData()) {
        current = current.getLeft();
      } else {
        current = current.getRight();
      }
    }

    if (current === null) {
      return n;
    }

    if (current.getLeft() === null && current.getRight() === null) {
      if (current !== n) {
        if (parent.getLeft() === current) {
          parent.setLeft(null);
        } else {
          parent.setRight(null);
        }
      } else {
        n = null;
        this.size--;
      }
    } else if (current.getLeft() && current.getRight()) {
      const successor = this.getMinimum(current.getRight());
      const sData = successor.getData();
      this.delete(n, sData);
      current.setData(sData);
    } else {
      let child;

      if (current.getLeft()) {
        child = current.getLeft();
      } else {
        child = current.getRight();
      }

      if (current !== n) {
        if (current === parent.getLeft()) {
          parent.setLeft(child);
        } else {
          parent.setRight(child);
        }
      } else {
        n = child;
      }
    }

    return n;
  }

  // Given data, retun the node.
  get(d) {
    let current = this.root;
    while (current) {
      if (current.getData() === d) {
        return current;
      }

      if (d < current.getData()) {
        current = current.getLeft();
      }

      if (d > current.getData()) {
        current = current.getRight();
      }
    }
  }

  // Get height of tree or sub-tree.
  getHeight(n) {
    if (!n) {
      return 0;
    }

    const leftHeight = this.getHeight(n.getLeft());
    const rightHeight = this.getHeight(n.getRight());

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    }

    return rightHeight + 1;
  }

  // Walk the tree starting at given node, and run callback for each node.
  walk(n, cb) {
    if (!n) {
      return;
    }

    this.walk(n.getLeft(), cb);

    cb(n);

    this.walk(n.getRight(), cb);
  }

  // Recurse the tree and verify whether it satisfies the constraints required
  // for a BST. (Every node on the left subtree has to be smaller than the
  // current node, and every node on the right subtree has to be larger than
  // the current node.)
  isBST(n, min, max) {
    if (!n) {
      return true;
    }

    if (n.getData() < min || n.getData() > max) {
      return false;
    }

    return (
      this.isBST(n.getLeft(), min, n.getData() - 1) &&
      this.isBST(n.getRight(), n.getData() + 1, max)
    );
  }
}
