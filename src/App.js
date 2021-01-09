import './App.css';
import React from 'react';
import Board from './containers/BoardContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minesweeper</h1>
      </header>
      <body>
        <div id='board'>
          <Board />
        </div>
      </body>
    </div>
  );
}

export default App;
