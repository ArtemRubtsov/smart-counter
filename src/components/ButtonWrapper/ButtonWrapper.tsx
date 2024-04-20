import { Button } from '../Button/Button'
import styles from './ButtonWrapper.module.css'
import {useState} from "react";

type ButtonWrapperType = {
  addCount: () => void;
  resetCount: () => void;
  isOpenSettings: () => void;
  count: number;
}



export const ButtonWrapper = ({addCount, resetCount,isOpenSettings, count}: ButtonWrapperType) => {


  return (
    <div className={styles.ButtonContainer}>
        <div className={count! < 5 ? styles.Button : styles.ButtonDisabled}>
            <Button callback={addCount} count={count} title='inc'  />
        </div>
        <div className={count! !== 0 ? styles.Button : styles.ButtonDisabled}>
            <Button callback={resetCount} title='reset'/>
        </div>
        <div>
            <Button callback={isOpenSettings} title='set'/>
        </div>

    </div>
  )
}
