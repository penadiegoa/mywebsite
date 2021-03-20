import styles from './Tictactoe.module.css';


const Square = props => {

  return (
    <div 
      className={styles.square} 
      onClick={() => props.selectHandler(props.id)}>
        {props.fill}
    </div>
  );
};

export default Square;