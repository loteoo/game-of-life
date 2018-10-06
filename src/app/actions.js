// ==================
// Global actions 
// ==================

// Sets the new item input value in the state
export const Evolve = (state, ev) => ({
  ...state,
  generation: state.generation + 1,
  grid: state.grid.map((row, x) => 
    row.map((cell, y) => {
      

      let neighbors = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let targetCol = (x + i + state.cols) % state.cols;
          let targetRow = (y + j + state.rows) % state.rows;
          neighbors += state.grid[targetCol][targetRow];
        }
      }
      neighbors -= state.grid[x][y];
      
      return cell == 0 && neighbors == 3 
        ? 1
        : neighbors < 2 || neighbors > 3
          ? 0
          : cell

          
    })
  )
})




