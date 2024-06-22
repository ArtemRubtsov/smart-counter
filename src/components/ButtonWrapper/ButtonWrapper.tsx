import { Button } from '../Button/Button'
import styles from './ButtonWrapper.module.css'

type ButtonWrapperType = {
  addCount: () => void;
  resetCount: () => void;
  isOpenSettings: () => void;
  start: number;
  max: number;
  score: number;
}

export const ButtonWrapper = ({addCount, resetCount,isOpenSettings, start, max, score}: ButtonWrapperType) => {

  return (
    <div className={styles.ButtonContainer}>
        <div className={score! < max ? styles.Button : styles.ButtonDisabled}>
            <Button callback={addCount}  title='inc'  />
        </div>
        <div className={score !== start ? styles.Button : styles.ButtonDisabled}>
            <Button callback={resetCount} title='reset'/>
        </div>
        <div>
            <Button callback={isOpenSettings} title='set' />
        </div>
    </div>
  )
}
