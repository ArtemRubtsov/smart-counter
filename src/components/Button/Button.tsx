import styles from './Button.module.css'

type ButtonPropsType = {
    title: string;
    callback: () => void;
    validInputSet?: () => boolean;
    setScoreValue?: () => void;
}

export const Button = ({title, callback, validInputSet, setScoreValue}: ButtonPropsType) => {

    const onClickHandler = () => {
        callback()
        setScoreValue?.()
    }

  return (
    <div className={styles.ButtonContainer}>   
        <div>
        <button onClick={onClickHandler} className={styles.Button} disabled={validInputSet ? validInputSet() : false} >
            {title}
        </button>
        </div>
    </div>
  )
}
