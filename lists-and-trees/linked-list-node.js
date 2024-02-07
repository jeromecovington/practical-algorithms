export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }

  setNext(n) {
    this.next = n || null;
  }

  getNext() {
    return this.next;
  }
};
