import styles from './ScoreBoard.module.css'


type ScoreBoardType = {
  count: number;
}


export const ScoreBoard = ({count}: ScoreBoardType) => {
  return (
    <div className={styles.ScoreBoard}>
      <div className={count < 5 ? styles.Score : styles.MaxScore}>
        {count}
      </div>  
    </div>
  )
}
