import React from 'react';
import { AiFillCaretRight, AiOutlinePauseCircle } from 'react-icons/ai';
import {
  MdRestartAlt,
  MdOutlineEditNotifications,
  MdCreateNewFolder,
} from 'react-icons/md';
import { BsQuestionSquareFill } from 'react-icons/bs';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function ButtonStart(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      <AiFillCaretRight />
    </button>
  );
}

export function ButtonRestart(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      <MdRestartAlt />
    </button>
  );
}

export function ButtonPausarStart(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text === 'Iniciar' ? (
        <AiFillCaretRight />
      ) : (
        <AiOutlinePauseCircle />
      )}
    </button>
  );
}

export function ButtonCreate(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      <MdCreateNewFolder />
    </button>
  );
}

export function ButtonEdit(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      <MdOutlineEditNotifications />
    </button>
  );
}

export function WhatPomodoro(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      <BsQuestionSquareFill />
    </button>
  );
}
