import styles from './Counter.module.css'
import { ScoreBoard } from "../ScoreBoard/ScoreBoard"
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper"
import {useEffect, useState} from "react"
import { Settings } from "../Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {
  addCountStore,
  addScoreStore, closeSettigns,
  CounterType,
  openSettings,
  resetCountStore
} from "../../store/features/counterReducer";


export const Counter = () => {
  const counter = useSelector<AppRootStateType, CounterType>( state => state.counter)
  const dispatch = useDispatch()
  function setValues(start: number, max: number) {
  }

     function addCount() {
    if(counter.isOpen) {
    dispatch(addScoreStore())
  }else
    dispatch(addCountStore())
}

  function resetCount() {
    // setScore(count)
    debugger
    dispatch(resetCountStore(counter.count))
  }

  function isOpenSettings() {
    // setIsOpen(!isOpen)
    dispatch(openSettings())
  }
  function isCloseSettings() {
    dispatch(closeSettigns())
  }


  return (
      <div className={styles.Box}>
        {counter.isOpen ? (
            <>
              {/*<ScoreBoard count={counter.count}  max={max} score={score}/>*/}
              <ScoreBoard count={counter.count}  max={counter.max} score={counter.score}/>
              <ButtonWrapper addCount={addCount}
                             resetCount={resetCount}
                             isOpenSettings={isOpenSettings}
                             count={counter.count}
                             max={counter.max}
                             score={counter.score}
              />
            </>
        ) : (
            <Settings isOpenSettings={isCloseSettings}
                      setValues={setValues}
                      count={counter.count}
                      max={counter.max}
                      // setMax={setMax}
                      // setCount={setCount}
                      score={counter.score}
            />
        )}
      </div>
  )
}


