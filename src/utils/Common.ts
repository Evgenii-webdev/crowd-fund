
const min = <T extends {}>(arr: Array<T>, fn: (arg: T) => number) => Math.min(...arr.map(fn));
const max = <T extends {}>(arr: Array<T>, fn: (arg: T) => number) => Math.max(...arr.map(fn));
const extent = <T extends {}>(arr: Array<T>, fn: (arg: T) => number) => [min(arr, fn), max(arr, fn)];