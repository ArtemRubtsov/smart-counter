import styles from './Counter.module.css'
import { ScoreBoard } from "../ScoreBoard/ScoreBoard"
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper"
import {useEffect, useState} from "react"
import { Settings } from "../Settings/Settings";

export const Counter = () => {
  const storedData = localStorage.getItem("counterData");
  const initialData = storedData ? JSON.parse(storedData) : { count: 0, max: 1, isOpen: true };
  const [count, setCount] = useState<number>(initialData.count);
  const [score, setScore] = useState<number>(count);
  const [max, setMax] = useState<number>(initialData.max);
  const [isOpen, setIsOpen] = useState<boolean>(true)

  useEffect(() => {
    localStorage.setItem("counterData", JSON.stringify({ count, max, isOpen }));
  }, [count, max, isOpen]);


  function setValues(start: number, max: number) {
    setCount(start);
    setMax(max);
  }

  function addCount() {
    if(isOpen) {
      setScore(score + 1)
    }else
      setCount(count + 1)
  }

  function resetCount() {
    setScore(count)
  }

  function isOpenSettings() {
    setIsOpen(!isOpen)
  }


  return (
      <div className={styles.Box}>
        {isOpen ? (
            <>
              <ScoreBoard count={count}  max={max} score={score}/>
              <ButtonWrapper addCount={addCount}
                             resetCount={resetCount}
                             isOpenSettings={isOpenSettings}
                             count={count}
                             max={max}
                             score={score}
              />
            </>
        ) : (
            <Settings isOpenSettings={isOpenSettings}
                      setValues={setValues}
                      count={count}
                      max={max}
                      setMax={setMax}
                      setCount={setCount}
                      score={score}
            />
        )}
      </div>
  )
}


