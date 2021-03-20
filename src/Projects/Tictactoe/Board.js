import React from 'react';
import styles from './Tictactoe.module.css';

const Board = props => {

  return (
    <div id="board" className={styles.board}>
      <div className={styles.row}>
        {props.children.slice(0,3)}
      </div>
      <div className={styles.row}>
        {props.children.slice(3,6)}
      </div>
      <div className={styles.row}>
        {props.children.slice(6,9)}
      </div>
    </div>
  );
}

export default Board;