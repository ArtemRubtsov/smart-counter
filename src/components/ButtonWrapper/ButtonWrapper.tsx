import { Button } from '../Button/Button'
import styles from './ButtonWrapper.module.css'

type ButtonWrapperType = {
  addCount: () => void;
  resetCount: () => void;
  isOpenSettings: () => void;
  count: number;
  max: number;
  score: number;
}

export const ButtonWrapper = ({addCount, resetCount,isOpenSettings, count, max, score}: ButtonWrapperType) => {

  return (
    <div className={styles.ButtonContainer}>
        <div className={score! < max ? styles.Button : styles.ButtonDisabled}>
            <Button callback={addCount}  title='inc'  />
        </div>
        <div className={score! !== count ? styles.Button : styles.ButtonDisabled}>
            <Button callback={resetCount} title='reset'/>
        </div>
        <div>
            <Button callback={isOpenSettings} title='set'/>
        </div>

    </div>
  )
}
