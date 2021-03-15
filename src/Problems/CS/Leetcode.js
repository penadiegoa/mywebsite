import React from 'react';

import './Leetcode.css';


const Leetcode = props => {
  return (
    <div className="comp-container">
      <h2>LeetCode Problems</h2>
      <p>These are some of the nicest LC problems I've encountered (w/ a detailed description of how I approached them):</p>
      <div className="prob-container">
        <div className="prob-picture">
          <img className="prob-svg" src="../assets/svg/arithslices.svg" alt="arith_slices"/>
        </div>
        <hr/>
        <div className="prob-explanation">
          <h3>413. Arithmetic Slices</h3>
          <p>We make use of a helper recursive function <code>helper(i, j, diff)</code> to update to traverse the array <code>A</code> with two pointers <code>i</code> & <code>j</code> </p>
        </div>
      </div>

      <div className="prob-container">
        <div className="prob-picture">
          <img className="prob-svg" src="../assets/svg/score_of_paren.svg" alt="arith_slices"/>
        </div>
        <hr/>
        <div className="prob-explanation">
          <h3>856.	Score of Parentheses</h3>
          <p>We make use of a helper recursive function <code>sumInsides(i)</code> to parse the string of parentheses <code>S</code> into integer values starting from the inner self-closing parentheses\
            and moving towards outer enclosing parentheses</p>
        </div>
      </div>
    </div>
  )
};

export default Leetcode;