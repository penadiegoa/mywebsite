import React from 'react';

import Square from './Square';
import styles from './Game.module.css';

const Board = props => {

  return (
    <div id="game-board">
      <div className={styles.board}>
        <div className={styles.row}>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(1)}/>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(2)}/>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(3)}/>
        </div>
        <div className={styles.row}>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(4)}/>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(5)}/>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(6)}/>
        </div>
        <div className={styles.row}>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(7)}/>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(8)}/>
          <Square ref={props.cellRef} symbols={props.symbols} onesTurn={props.onesTurn} clickHandler={() => props.clickHandler(9)}/>
        </div>
      </div>
    </div>
  );
}

export default Board;