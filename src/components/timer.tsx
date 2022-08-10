import React from 'react';
import { secondToMinutes } from '../utils/seconds-to-minute';

interface Props {
  mainTimer: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{secondToMinutes(props.mainTimer)}</div>;
}
