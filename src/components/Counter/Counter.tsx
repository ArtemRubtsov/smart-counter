import styles from './Counter.module.css'
import { ScoreBoard } from "../ScoreBoard/ScoreBoard"
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper"
import { Settings } from "../Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {addScoreStore, openCloseSettings, resetScoreStore, ScoreStateType} from "../../store/features/scoreReducer";

export const Counter = () => {
  const dataStore = useSelector<AppRootStateType, ScoreStateType>(state => state.data)
  const dispatch = useDispatch()

  localStorage.setItem('score', JSON.stringify(dataStore.score))
  localStorage.setItem('start', JSON.stringify(dataStore.start))
  localStorage.setItem('max', JSON.stringify(dataStore.max))
  localStorage.setItem('isOpen', JSON.stringify(dataStore.isOpen))


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
            <Settings
                      isOpen={dataStore.isOpen}
                      start={dataStore.start}
                      max={dataStore.max}
                      score={dataStore.score}
            />
        )}
      </div>
  )
}


