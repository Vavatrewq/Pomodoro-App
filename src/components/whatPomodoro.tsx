import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import App from '../App';

export function WhatIsPomodoro(): JSX.Element {
  const [closed, setClosed] = useState(false);

  return (
    <>
      {closed ? (
        <App />
      ) : (
        <div className="container">
          <div className="pomodoro">
            <div className="container-closed">
              <AiFillCloseCircle
                onClick={() => setClosed(true)}
                className="btn-closed"
              />
            </div>
            <h1>O que é Pomodoro?</h1>
            <p>
              Fonte:{' '}
              <a
                href="https://pt.wikipedia.org/wiki/Técnica_pomodoro"
                target="_back"
              >
                Pomodoro - WikiPedia.
              </a>
            </p>{' '}
            <br />
            <p>
              É um método de gerenciamento de tempo que consiste na utilização
              de um cronômetro para dividir o trabalho em períodos de 25
              minutos, separados por breves intervalos. 🔥
            </p>{' '}
            <br />
            <p>
              O método é baseado na ideia de que pausas frequentes podem
              aumentar a agilidade mental. 🎓
            </p>{' '}
            <br />
            <h3>Blz, mas como funciona o Programa?</h3>
            <p>
              O pomodoro inicia com seu tempo de trabalho, e alternar entre o
              descanso com repetição dos pomodoros concluidos, quando acaba as
              repetições do pomodoro você ganha tempo de descanso maior, e
              depois inicia tantas vezes desejar manter.
            </p>{' '}
            <br />
            <h3>Exemplo de Uso das Funcionalidades:</h3>
            <ul>
              <li>Você pode aplicar o seu tempo de trabalho ex: 25s.</li>
              <li>Junto com descanso: 10s. </li>
              <li>
                E descanso maior 25s quando completar os pomodoros de repetição:
                4rep.
              </li>
              <li>
                Quando todas as repetições do pomodoro for completa, fecha o
                primeiro ciclos.{' '}
              </li>
              <li>
                Todas as Horas gastas são armazenados em Horas Trabalhadas.
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
