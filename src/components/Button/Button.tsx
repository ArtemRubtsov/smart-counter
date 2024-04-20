import styles from './Button.module.css'

type ButtonPropsType = {
    title: string;
    callback: () => void;
    count?: number;
}

export const Button = ({title, callback, count}: ButtonPropsType) => {

    const onClickHandler = () => {
        callback() 
    }

  return (
    <div className={styles.ButtonContainer}>   
        <div>
        <button onClick={onClickHandler} className={styles.Button} >
            {title}
        </button> 
        </div>
    </div>
  )
}
