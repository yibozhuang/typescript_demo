import { Sorter } from './Sorter';

class LNode {
  next: LNode | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: LNode | null = null;

  add(data: number): void {
    const node = new LNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): LNode {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: LNode | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(left: number, right: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(left).data > this.at(right).data;
  }

  swap(left: number, right: number): void {
    const lnode = this.at(left);
    const rnode = this.at(right);

    const val = lnode.data;
    lnode.data = rnode.data;
    rnode.data = val;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: LNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
