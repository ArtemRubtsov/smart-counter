import styles from './Counter.module.css'
import { ScoreBoard } from "../ScoreBoard/ScoreBoard"
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper"
import { useState } from "react"
import { Settings } from "../Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {ScoreStateType} from "../../store/features/scoreReducer";

export const Counter = () => {
  // const storedData = localStorage.getItem("counterData");
  // const initialData = storedData ? JSON.parse(storedData) : { score: 0, max: 1,start: 0, isOpen: true };
  // const [score, setScore] = useState<number>(initialData.score);
  // const [max, setMax] = useState<number>(initialData.max);
  // const [isOpen, setIsOpen] = useState<boolean>(true)
  // const [start, setStart] = useState<number>(0)
  //
  // localStorage.setItem("counterData", JSON.stringify({ score, max, isOpen }));
  localStorage.setItem('score', JSON.stringify(1))
  localStorage.setItem('start', JSON.stringify(1))
  localStorage.setItem('max', JSON.stringify(1))
  localStorage.setItem('isOpen', JSON.stringify(false))

  const dataStore = useSelector<AppRootStateType, ScoreStateType>(state => state.data)
  const dispatch = useDispatch()

  function addCount() {
      // setScore(score + 1)
  }

  function resetCount() {
    // setScore(start)
  }

  function isOpenSettings() {
    // setIsOpen(!isOpen)
  }

  return (
      <div className={styles.Box}>
        {dataStore.isOpen ? (
            <>
              <ScoreBoard max={dataStore.max} score={dataStore.score}/>
              <ButtonWrapper addCount={addCount}
                             resetCount={resetCount}
                             isOpenSettings={isOpenSettings}
                             start={dataStore.start}
                             max={dataStore.max}
                             score={dataStore.score}
              />
            </>
        ) : (
            <Settings isOpenSettings={isOpenSettings}
                      isOpen={dataStore.isOpen}
                      start={dataStore.start}
                      // setStart={setStart}
                      max={dataStore.max}
                      // setMax={setMax}
                      score={dataStore.score}
                      // setScore={setScore}
            />
        )}
      </div>
  )
}


