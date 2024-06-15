import { Button } from '../Button/Button'
import styles from './Settings.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {changeMaxCount, CounterType} from "../../store/features/counterReducer";

type SettingsPropsType = {
    isOpenSettings: () => void;
    setValues: (start: number, max: number) => void;
    count: number;
    // setCount: (count: number) => void;
    max: number;
    // setMax: (max: number) => void;
    score: number
}

export const Settings = ({isOpenSettings, setValues, count, max,score}: SettingsPropsType) => {
    const [err, setErr] = useState<string>('')
    const counter = useSelector<AppRootStateType, CounterType>( state => state.counter)
    const dispatch = useDispatch()
    function onStartCountHandler() {
        // setValues(count, max);
        isOpenSettings();
    }


    function onMaxCountHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newMaxCount = parseInt(event.target.value);
        // setMax(newMaxCount);
        dispatch(changeMaxCount(newMaxCount))
        if(newMaxCount < count){
            setErr('Please enter a valid value')
        }
    }

    function onStartValueHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newStartValue = parseInt(event.target.value);

        // setCount(newStartValue);

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
                           className={count >= max ? styles.inputError : styles.SettingsDisplay}
                           type="number"
                    />
                    <span className={styles.err}>{max <= count ? err : ''}</span>
                </div>

                <div className={styles.SettingsDisplayWrapper}>
                    <span className={styles.spanValue}>Start value:</span>
                    <input  value={count}
                            min={0}
                            onChange={onStartValueHandler}
                            className={count < max ? styles.SettingsDisplay : styles.inputError}
                            type="number"/>
                        <span className={styles.err}>{count <= max ? '' : err}</span>
                </div>

            </div>
            <div >
                <Button title={'set'} callback={onStartCountHandler} validInputSet={validInputSet}/>
                {/*<button disabled={validInput()}>disabled</button>*/}
            </div>

        </div>
    )
}
