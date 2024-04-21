import { Button } from '../Button/Button'
import styles from './Settings.module.css'

type SettingsPropsType = {
    isOpenSettings: () => void;
    setValues: (start: number, max: number) => void;
    count: number;
    setCount: (count: number) => void;
    max: number;
    setMax: (max: number) => void;
    score: number
}

export const Settings = ({isOpenSettings, setValues, count, max, setMax, setCount, score}: SettingsPropsType) => {
    function onStartCountHandler() {
        // setValues(count, max);
        isOpenSettings();
    }

    function onMaxCountHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newMaxCount = parseInt(event.target.value);
        setMax(newMaxCount);
    }

    function onStartValueHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newStartValue = parseInt(event.target.value);
        setCount(newStartValue);
    }
    function validInputSet(){
        if(max < count) {
            return true
        }else if(count >= max){
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
                           className={max < count ? styles.inputError  : styles.SettingsDisplay}
                           type="number"
                    />
                </div>

                <div className={styles.SettingsDisplayWrapper}>
                    <span className={styles.spanValue}>Start value:</span>
                    <input  value={count}
                            min={0}
                            onChange={onStartValueHandler}
                            className={count < max ? styles.SettingsDisplay : styles.inputError}
                            type="number"/>
                </div>

            </div>
            <div >
                <Button title={'set'} callback={onStartCountHandler} validInputSet={validInputSet}/>
                {/*<button disabled={validInput()}>disabled</button>*/}
            </div>

        </div>
    )
}
