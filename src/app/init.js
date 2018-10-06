


const repeat = (fn, n) => Array(n).fill(0).map(fn);
const rand = () => Math.floor((Math.random() * 2));
const create2DArray = (cols, rows) => repeat(() => repeat(rand, cols), rows);




// Initial state of the app
export const init = {
  grid: create2DArray(100, 100),
  cols: 100,
  rows: 100,
  speed: 100,
  generation: 0
}

// While the empty initial state could often be
// removed from the codebase without impacting the app,
// keeping it serves as a great piece of documentation
// that describes, to some extent, the data structure 
// of the application. Explicit > Implicit