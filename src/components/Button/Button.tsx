import styles from './Button.module.css'

type ButtonPropsType = {
    title: string;
    callback: () => void;
    validInputSet?: () => boolean;
}

export const Button = ({title, callback, validInputSet}: ButtonPropsType) => {

    const onClickHandler = () => {
        callback()
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
