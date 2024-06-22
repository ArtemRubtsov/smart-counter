import styles from './Counter.module.css'
import { ScoreBoard } from "../ScoreBoard/ScoreBoard"
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper"
import { Settings } from "../Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {addScoreStore, openCloseSettings, resetScoreStore, ScoreStateType} from "../../store/features/scoreReducer";

export const Counter = () => {
  localStorage.setItem('score', JSON.stringify(5))
  localStorage.setItem('start', JSON.stringify(0))
  localStorage.setItem('max', JSON.stringify(0))
  localStorage.setItem('isOpen', JSON.stringify(false))

  const dataStore = useSelector<AppRootStateType, ScoreStateType>(state => state.data)
  const dispatch = useDispatch()

  function addCount() {
      dispatch(addScoreStore())
  }

  function resetCount() {
    dispatch(resetScoreStore())
  }

  function isOpenSettings() {
    dispatch(openCloseSettings())
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
                      max={dataStore.max}
                      score={dataStore.score}
            />
        )}
      </div>
  )
}


