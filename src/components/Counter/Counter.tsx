import styled from "styled-components"
import styles from './Counter.module.css'
import { ScoreBoard } from "../ScoreBoard/ScoreBoard"
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper"
import { useState } from "react"
import {Settings} from "../Settings/Settings";



export const Counter = () => {
  let initialCount: number = 0;
  const [count, setCount] = useState<number>(initialCount)
  const [max, setMax] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(true)


  function setStartValue() {
    setCount(count + 1)
  }
  function setMaxValue() {

  }
  function addCount() {
    if(count < 5)
    setCount(count + 1)
  }
  function resetCount() {
    setCount(0)
  }
  function isOpenSettings() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.Box}>
      {
        isOpen
            ?
            <>
              <ScoreBoard count={count}/>
              <ButtonWrapper addCount={addCount} resetCount={resetCount} isOpenSettings={isOpenSettings}  count={count}/>
            </>
            : <Settings  isOpenSettings={isOpenSettings} count={count}  setStartValue={setStartValue} max={max}/>
      }

    </div>
  )
}

