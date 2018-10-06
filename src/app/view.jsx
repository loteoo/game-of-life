// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from '../..//hyperapp.js'
import {cc} from 'classcat'
import {Evolve} from './actions'

// Root view
export const view = state => {
  console.table(state.grid)
  return (
    <main>
      <h1>Hyperapp 2.0!</h1>
      <p>1 kB JavaScript micro-framework for building declarative web applications</p>
      
      <br/>

      <div class="grid" style={{
        gridTemplateColumns: `repeat(${state.grid[0].length}, 1fr)`,
        gridTemplateRows: `repeat(${state.grid.length}, 1fr)`
      }}>
        {state.grid.map(row => 
          row.map(col => (
            <div class={'col ' + (col ? 'dead' : 'alive')} style={{
              width: `calc(80vw / ${state.grid[0].length})`,
              height: `calc(80vw / ${state.grid.length})`
            }}></div>
          ))
        )}
      </div>

      <button onclick={[Evolve]}>Evolve</button>
      
    </main>
  )
}
