import styles from './ScoreBoard.module.css'



type ScoreBoardType = {
  count: number;
  max: number;
  score: number
}


export const ScoreBoard = ({count, max, score}: ScoreBoardType) => {

  return (
    <div className={styles.ScoreBoard}>
      <div className={score < max ? styles.Score : styles.MaxScore}>
        {score}
      </div>  
    </div>
  )
}
