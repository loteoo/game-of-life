// Bundle css for this view
import 'sanitize.css'
import './style.css'

import {h} from '../..//hyperapp.js'
import {cc} from 'classcat'
import {Evolve} from './actions'

// Root view
export const view = state => {
  return (
    <main>

      <header>
        <h1>Hyperapp 2.0 game of life</h1>
      </header>

      <div class="grid" style={{
        gridTemplateColumns: `repeat(${state.cols}, 1fr)`,
        gridTemplateRows: `repeat(${state.rows}, 1fr)`
      }}>
        {state.grid.map(row => 
          row.map(col => (
            <div class={'col ' + (col ? 'dead' : 'alive')} style={{
              width: `calc(90vw / ${state.cols})`,
              height: `calc(90vw / ${state.cols})`
            }}></div>
          ))
        )}
      </div>

      
      <div class="info">
        <p>Generation: {state.generation}</p>
        
        <button onclick={[Evolve]}>Evolve</button>
      </div>
      

    </main>
  )
}
