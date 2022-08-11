import React, { useEffect, useState } from 'react';
import App from '../App';
import { useInterval } from '../hooks/use-interval';
import { secondToTimer } from '../utils/seconds-to-time';
import {
  ButtonEdit,
  ButtonPausarStart,
  ButtonRestart,
  ButtonStart,
} from './button';
import Huge from '../imgs/Huge.jpg';
import { Timer } from './timer';
import { Props } from '../types/interface/method-Props';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const soundTouchStart = require('../sounds/touch-Start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const soundTouchRest = require('../sounds/touch-Rest.mp3');

const soundStart = new Audio(soundTouchStart);
const soundRest = new Audio(soundTouchRest);

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTimer, setMainTimer] = useState(props.pomodoroTimer);
  const [timerCounting, setTimerCounting] = useState(false);
  const [showtime, setShowtime] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const cyclesArray = (): boolean[] => {
    return new Array(props.cycles - 1).fill(true);
  };
  const [cyclesQtdManager, setCyclesQtdManager] = useState(cyclesArray());

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTimer(mainTimer - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timerCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimerCounting(true),
      setWorking(true),
      setResting(false),
      setMainTimer(props.pomodoroTimer);
    soundStart.play();
  };

  const configureResting = (long: boolean) => {
    setTimerCounting(true), setWorking(false), setResting(true);

    if (long) {
      setMainTimer(props.longRestTime);
    } else {
      setMainTimer(props.shortRestTime);
    }

    soundRest.play();
  };

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');

    if (mainTimer > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureResting(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureResting(true);
      setCyclesQtdManager(cyclesArray());
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTimer,
    cyclesQtdManager,
    completedCycles,
    numberOfPomodoros,
    configureResting,
    setCyclesQtdManager,
    setCompletedCycles,
    configureWork,
    setNumberOfPomodoros,
  ]);

  return (
    <>
      {showtime ? (
        <App />
      ) : (
        <div className="container">
          <div className="pomodoro">
            <div className="container-img">
              <img className="img-content" src={Huge} alt="timer" />
            </div>

            <h2>Você Esta: {working ? 'Trabalhando...' : 'Descansando...'}</h2>
            <Timer mainTimer={mainTimer} />
            <div className="controls">
              <ButtonStart text="Iniciar" onClick={() => configureWork()} />
              <ButtonRestart
                text="Restaurar"
                onClick={() => configureResting(false)}
              />
              <ButtonEdit
                text="Alterar"
                onClick={() => {
                  setShowtime(true), setTimerCounting(false);
                }}
              />
              <ButtonPausarStart
                className={!working && !resting ? 'hidden' : ''}
                text={!timerCounting ? 'Iniciar' : 'Pausar'}
                onClick={() => setTimerCounting(!timerCounting)}
              />
            </div>

            <div className="details">
              <p>Ciclos Concluidos: {completedCycles}</p>
              <p>Horas Trabalhadas: {secondToTimer(fullWorkingTime)}</p>
              <p>Pomodoros Concluidos: {numberOfPomodoros}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
