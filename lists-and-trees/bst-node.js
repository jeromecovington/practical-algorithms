export default class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  getData() {
    return this.data;
  }

  setLeft(n) {
    this.left = n || null;
  }

  setRight(n) {
    this.right = n || null;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }
}
