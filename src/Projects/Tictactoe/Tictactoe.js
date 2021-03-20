import React, { useEffect, useState } from 'react';
import Board from './Board';
import { ImCross, ImRadioUnchecked } from 'react-icons/im';
import styles from './Tictactoe.module.css';
import Square from './Square';
import { IconContext } from 'react-icons/lib';


const Tictactoe = () =>  {

  const symbols = [
    null,
    <ImCross/>,
    <ImRadioUnchecked/>
  ];
  const cleanBoard = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
  };
  const allWinners = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ];

  const [board, setBoard] = useState(cleanBoard);
  const [winners, setWinners] = useState(allWinners);
  let [winner, setWinner] = useState(null);
  let [player1Turn, setPlayer1Turn] = useState(false);

  const selectHandler = id => {
    if (!winner && !board[id]) {
      const newBoard = {...board};
      if (player1Turn) {
        newBoard[id] = 1;
      } else {
        newBoard[id] = 2;
      };
  
      setBoard(newBoard);
    }
  };

  useEffect(() => {
    checkForWin();
    setPlayer1Turn(!player1Turn);
    console.log(board);
  }, [board]);

  const checkForWin = () => {
    const remaining = [];
    console.log(winners);
    winners.forEach(winner => {
      const first = board[winner[0]];
      const second = board[winner[1]];
      const third = board[winner[2]];
      if (first === second && second === third) {
        // All the same
        if (first !== null) {
          // All same symb
          declareWinner();
        } else {
          // All null
          remaining.push(winner);
        }
      } else {
        // All NOT the same
        if (
          (first === 1 ||
          second === 1 ||
          third === 1) &&
          (first === 2 ||
          second === 2 ||
          third === 2) 
        ) {
          // Two symbols
        } else {
          // One symbol
          remaining.push(winner);
        }
      }
    });
    setWinners(remaining);
  }

  const declareWinner = () => {
    if (player1Turn) {
      setWinner('PLAYER 1');
    } else {
      setWinner('PLAYER 2');
    };
  };

  const resetGame = () => {
    setWinner(null);
    setPlayer1Turn(false);
    setBoard(cleanBoard);
    setWinners(allWinners);
  };

  const nextUp = winner ?
    <>___________</>
   : player1Turn ? 
    <>
      PLAYER 1 
      <IconContext.Provider value={{  }}>
        <span className={styles.smallSymb}>{symbols[1]}</span>
      </IconContext.Provider>
    </>
    : 
    <>
      PLAYER 2 
      <IconContext.Provider value={{ }}>
        <span className={styles.smallSymb}>{symbols[2]}</span>
      </IconContext.Provider>
    </>

  return (
    <div className={styles.container}>
      <div id="status" className={styles.instructions}>Next player: {nextUp}</div>
      <div id="winner" className={styles.instructions}>Winner: {winner}</div>
      <button 
        className={styles.button}
        onClick={resetGame}>
        Reset
      </button>
      <Board>
        {Object.keys(board).map(id => 
          <Square
            key={id}
            id={id}
            selectHandler={selectHandler}
            fill={symbols[board[id]]}
          />
        )}
      </Board>
      {winner ? 
        <div className={styles.winner}>
          {winner} IS THE WINNER!
        </div>
      : null}
    </div>
  );
};

export default Tictactoe;