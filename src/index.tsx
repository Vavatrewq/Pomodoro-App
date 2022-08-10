import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/config-pomodoro.css';
import './css/pomodoro.css';
import Main from './main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<Main />);
