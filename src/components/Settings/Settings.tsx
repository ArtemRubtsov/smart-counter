import { Button } from '../Button/Button'
import styles from './Settings.module.css'
import {useDispatch} from "react-redux";
import {maxSetScore, openCloseSettings, setSettings, startSetScore} from "../../store/features/scoreReducer";

type SettingsPropsType = {
    start: number;
    max: number;
    score: number;
    isOpen: boolean;
}

export const Settings = ({ max, start,}: SettingsPropsType) => {
    const dispatch = useDispatch()
    function onStartCountHandler() {
        dispatch(setSettings())
        dispatch(openCloseSettings())
    }

    function onMaxCountHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newMaxScore = parseInt(event.target.value);
        dispatch(maxSetScore(newMaxScore))
    }

    function onStartValueHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newStartValue = parseInt(event.target.value);
        dispatch(startSetScore(newStartValue))
    }
    function validInputSet(){
        if(max < start) {
            return true
        }else if(start >= max){
            return true
        }else{
            return false
        }
    }
    return (
        <div>
            <div className={styles.Settings}>
                <div className={styles.SettingsDisplayWrapper}>
                    <span className={styles.spanValue}>Max value:</span>
                    <input value={max}
                           min={0}
                           onChange={onMaxCountHandler}
                           className={max <= start ? styles.inputError  : styles.SettingsDisplay}
                           type="number"
                    />
                </div>

                <div className={styles.SettingsDisplayWrapper}>
                    <span className={styles.spanValue}>Start value:</span>
                    <input  value={start}
                            min={0}
                            onChange={onStartValueHandler}
                            className={start < max ? styles.SettingsDisplay : styles.inputError}
                            type="number"/>
                </div>

            </div>
            <div>
                <Button title={'set'} callback={onStartCountHandler} validInputSet={validInputSet} />
            </div>

        </div>
    )
}
