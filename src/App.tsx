import React, { useEffect, useState } from 'react';
import { ButtonCreate, WhatPomodoro } from './components/button';
import { PomodoroTimer } from './components/pomodoro-timer';
import { WhatIsPomodoro } from './components/whatPomodoro';
import ContainerImg from './imgs/containerImg.jpg';

const result = {
  working: 1,
  workingSmall: 1,
  workingLanger: 1,
  workingCycles: 1,
};

export function App(): JSX.Element {
  const [showtime, setShowtime] = useState(false);
  const [configureWorking, setConfigureWorking] = useState(result);
  const [inputWorking, setInputWorking] = useState('');
  const [inputWorkingSmall, setInputWorkingSmall] = useState('');
  const [inputWorkingLanger, setInputWorkingLanger] = useState('');
  const [inputWorkingCycles, setInputWorkingCycles] = useState('');
  const [whatPomodoro, setWhatPomodoro] = useState(false);

  useEffect(() => {
    setConfigureWorking({
      working: Math.floor(Number(inputWorking)),
      workingSmall: Math.floor(Number(inputWorkingSmall)),
      workingLanger: Math.floor(Number(inputWorkingLanger)),
      workingCycles: Math.floor(Number(inputWorkingCycles)),
    });
  }, [
    inputWorking,
    inputWorkingSmall,
    inputWorkingLanger,
    inputWorkingCycles,
    setConfigureWorking,
  ]);

  return (
    <>
      {showtime ? (
        <PomodoroTimer
          pomodoroTimer={
            configureWorking.working > 0 ? configureWorking.working : 1
          }
          shortRestTime={
            configureWorking.workingLanger > 0
              ? configureWorking.workingSmall
              : 1
          }
          longRestTime={
            configureWorking.workingSmall > 0
              ? configureWorking.workingLanger
              : 1
          }
          cycles={
            configureWorking.workingCycles > 0
              ? configureWorking.workingCycles
              : 1
          }
        />
      ) : (
        <>
          {whatPomodoro ? (
            <WhatIsPomodoro />
          ) : (
            <div className="container">
              <div className="pomodoro">
                <WhatPomodoro
                  className="btn-start"
                  text="what-pomodoro"
                  onClick={() => {
                    setWhatPomodoro(true);
                  }}
                />
                <div className="container-img">
                  <img className="img-content" src={ContainerImg} alt="timer" />
                </div>

                <h2>Cria Sua Rotina...</h2>

                <div className="container-input">
                  <input
                    className="config-input"
                    min={1}
                    type="number"
                    placeholder="Tempo de Trabalho:"
                    name="time-working"
                    onChange={(event) => setInputWorking(event.target.value)}
                    value={inputWorking}
                  />
                  <input
                    className="config-input"
                    min={1}
                    type="number"
                    placeholder="Tempo de Folga Menor:"
                    name="time-working-small"
                    onChange={(event) =>
                      setInputWorkingSmall(event.target.value)
                    }
                    value={inputWorkingSmall}
                  />
                  <input
                    className="config-input"
                    min={1}
                    type="number"
                    placeholder="Tempo de Folga Maior:"
                    name="time-working-langer"
                    onChange={(event) =>
                      setInputWorkingLanger(event.target.value)
                    }
                    value={inputWorkingLanger}
                  />
                  <input
                    className="config-input"
                    min={1}
                    type="number"
                    placeholder="Ciclos de Repetição:"
                    name="repeat-cycles"
                    onChange={(event) =>
                      setInputWorkingCycles(event.target.value)
                    }
                    value={inputWorkingCycles}
                  />
                  <ButtonCreate
                    className="btn-start"
                    text="Criar"
                    onClick={() => {
                      setShowtime(true);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
