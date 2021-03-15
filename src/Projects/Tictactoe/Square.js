import React from 'react';

import styles from './Game.module.css';

export default class Square extends React.Component {

  state = {
    fill: ''
  }

  fillCell = () => {
    this.props.clickHandler();
    if (this.props.onesTurn) {
      this.setState({fill: this.props.symbols[0]});
    } else {
      this.setState({fill: this.props.symbols[1]});
    }
  }

  clearCell = () => {
    this.setState({fill: ''})
  }

  render() {
    return (
      <div 
        className={styles.square} 
        onClick={this.fillCell}>
          {this.state.fill}
      </div>
    );
  }
}