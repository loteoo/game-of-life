// ==================
// Global actions 
// ==================

// Sets the new item input value in the state
export const Evolve = (state, ev) => ({
  ...state,
  generation: state.generation + 1,
  grid: state.grid.map((row, i) => 
    row.map((col, j) => {
      let neighbors = countNeighbors(state, i, j);
      if (col == 0 && neighbors == 3) {
        return 1;
      } else if (col == 1 && (neighbors < 2 || neighbors > 3)) {
        return 0;
      } else {
        return col;
      }
    })
  )
})





const countNeighbors = (state, x, y) => {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + state.grid[0].length) % state.grid[0].length;
      let row = (y + j + state.grid.length) % state.grid.length;
      sum += state.grid[col][row];
    }
  }
  sum -= state.grid[x][y];
  return sum;
}