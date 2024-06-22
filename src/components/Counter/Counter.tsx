import styles from './Counter.module.css'
import { ScoreBoard } from "../ScoreBoard/ScoreBoard"
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper"
import { useState } from "react"
import { Settings } from "../Settings/Settings";

export const Counter = () => {
  const storedData = localStorage.getItem("counterData");
  const initialData = storedData ? JSON.parse(storedData) : { score: 0, max: 1,start: 0, isOpen: true };
  const [score, setScore] = useState<number>(initialData.score);
  const [max, setMax] = useState<number>(initialData.max);
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [start, setStart] = useState<number>(0)

  localStorage.setItem("counterData", JSON.stringify({ score, max, isOpen }));

  function addCount() {
      setScore(score + 1)
  }

  function resetCount() {
    setScore(start)
  }

  function isOpenSettings() {
    setIsOpen(!isOpen)
  }

  return (
      <div className={styles.Box}>
        {isOpen ? (
            <>
              <ScoreBoard max={max} score={score}/>
              <ButtonWrapper addCount={addCount}
                             resetCount={resetCount}
                             isOpenSettings={isOpenSettings}
                             start={start}
                             max={max}
                             score={score}
              />
            </>
        ) : (
            <Settings isOpenSettings={isOpenSettings}
                      isOpen={isOpen}
                      start={start}
                      setStart={setStart}
                      max={max}
                      setMax={setMax}
                      score={score}
                      setScore={setScore}
            />
        )}
      </div>
  )
}


