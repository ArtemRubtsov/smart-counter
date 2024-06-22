import { Button } from '../Button/Button'
import styles from './Settings.module.css'

type SettingsPropsType = {
    start: number;
    // setStart: (start: number) => void;
    isOpenSettings: () => void;
    max: number;
    // setMax: (max: number) => void;
    score: number;
    // setScore: (start: number) => void
    isOpen: boolean;
}

export const Settings = ({isOpenSettings, max, score, start, isOpen}: SettingsPropsType) => {
    function onStartCountHandler() {
        isOpenSettings();
    }

    function onMaxCountHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newMaxCount = parseInt(event.target.value);
        // setMax(newMaxCount);
    }

    function onStartValueHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newStartValue = parseInt(event.target.value);
        // setStart(newStartValue)
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
    const onValueHandler = () => {
        // setScore(start)
    }

    // @ts-ignore
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
                <Button title={'set'} callback={onStartCountHandler} validInputSet={validInputSet} setScoreValue={onValueHandler}/>
            </div>

        </div>
    )
}
