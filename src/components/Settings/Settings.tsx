import {Button} from "../Button/Button";
import styles from './Settings.module.css'

type SettignsPropsType = {
    isOpenSettings: () => void;
    setStartValue: () => void;
    count: number;
    max: number;
}

export const Settings = ({isOpenSettings,setStartValue, count, max}: SettignsPropsType) => {

    function onStartCountHandler() {
        setStartValue()
    }
    function onMaxCountHandler(event: React.ChangeEvent<HTMLInputElement>){
        const newMaxCount = parseInt(event.target.value);
    }

    return (
        <div>
            <div className={styles.Settings}>
                <div className={styles.SettingsDisplayWrapper}>
                    <span className={styles.spanValue}>Max value:</span>
                    <input value={count} onChange={onMaxCountHandler} className={styles.SettingsDisplay} type="number"/>
                </div>

                <div className={styles.SettingsDisplayWrapper}>
                    <span className={styles.spanValue}>Start value:</span>
                    <input  value={count}
                            min={0}
                            max={10}
                            onChange={onStartCountHandler}
                            className={styles.SettingsDisplay}
                            type="number"/>
                </div>

            </div>
            <div >
                <Button title={'Set'} callback={isOpenSettings}/>
            </div>

        </div>
    )
}
