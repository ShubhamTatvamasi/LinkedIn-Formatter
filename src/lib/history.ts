export interface Snapshot {
  value: string;
  start: number;
  end: number;
}

/** Linear undo/redo stack of editor snapshots. */
export class History {
  private stack: Snapshot[];
  private index = 0;

  constructor(
    initial: Snapshot,
    private readonly limit = 200,
  ) {
    this.stack = [initial];
  }

  reset(initial: Snapshot) {
    this.stack = [initial];
    this.index = 0;
  }

  /** Record a snapshot; ignored if the text hasn't changed. Drops any redo branch. */
  push(s: Snapshot) {
    const cur = this.stack[this.index];
    if (cur.value === s.value) {
      this.stack[this.index] = s; // keep latest caret position
      return;
    }
    this.stack = this.stack.slice(0, this.index + 1);
    this.stack.push(s);
    if (this.stack.length > this.limit) this.stack.shift();
    this.index = this.stack.length - 1;
  }

  undo(): Snapshot | null {
    if (this.index === 0) return null;
    return this.stack[--this.index];
  }

  redo(): Snapshot | null {
    if (this.index >= this.stack.length - 1) return null;
    return this.stack[++this.index];
  }
}
