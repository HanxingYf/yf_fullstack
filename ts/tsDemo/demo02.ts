function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}

const three = add({ one: 1, two: 2 });