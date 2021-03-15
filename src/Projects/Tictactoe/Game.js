import React from 'react';
import Board from './Board';

import styles from './Game.module.css';


export default class Game extends React.Component {

  winningCombos = [
    '123',
    '456',
    '789',
    '147',
    '258',
    '369',
    '159',
    '357'
  ];
  symbols = ['X','O']

  state = {
    winner: null,
    player1: [],
    player2: [],
    player1Turn: true
  }

  clickHandler = cellId => {
    let updatedMoves = ''
    if (this.state.player1Turn) {
      console.log('cell '+cellId+' was clicked by Player 1');
      updatedMoves = [cellId, ...this.state.player1];
      const updatedState = {
        player1: updatedMoves,
        player1Turn: false
      }
      const winner = this.hasPlayerWon(updatedMoves);
      if (winner) {
        updatedState.winner = 'PLAYER 1'
      };
      this.setState(updatedState);
    } else {
      console.log('cell '+cellId+' was clicked by Player 2');
      updatedMoves = [cellId, ...this.state.player2];
      const updatedState = {
        player2: updatedMoves,
        player1Turn: true
      }
      const winner = this.hasPlayerWon(updatedMoves);
      if (winner) {
        updatedState.winner = 'PLAYER 2'
      };
      this.setState(updatedState);
    }
  }

  hasPlayerWon(moves) {
    console.log(moves);
    if (this.winningCombos.includes(moves.sort().join(''))) {
      return true
    }
  }

  declareWinner = () => {
    // TO DO: insert this is in lifecycle hook that checks if winner changed
    console.log(this.state.winner + ' is the winner!');
  }

  resetGame = () => {
    this.setState({
      winner: null,
      player1: [],
      player2: [],
      player1Turn: true
    })
    this.cell.current.clearCell();
  }

  render() {
    return (
      <div className={styles.container}>
        <div id="status" className={styles.instructions}>Next player: {this.state.player1Turn ? 'PLAYER 1': 'PLAYER 2'}</div>
        <div id="winner" className={styles.instructions}>Winner: {this.state.winner}</div>
        <button 
          className={styles.button}
          onClick={this.resetGame}>
          Reset
        </button>
        <div className="game-board">
          <Board
            cellRef={() => this.cell} 
            symbols={this.symbols}
            onesTurn={this.state.player1Turn}
            clickHandler={this.clickHandler}/>
        </div>
        {this.state.winner ? 
          <div className={styles.winner}>
            {this.state.winner} IS THE WINNER!
          </div>
        : null
        }
      </div>
    );
  }
}