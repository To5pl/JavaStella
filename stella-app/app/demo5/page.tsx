"use client";

import { ProfileContext } from '@/app/store/ProfileContextProvider';

import { useContext } from 'react';

export default function Demo5() {
  const { state, dispatch } = useContext(ProfileContext);

  return (
    <main>
     <h1>Context Counter - Demo 5: {state.username} - {state.email} </h1>
      <button onClick={
        () => dispatch({ type: "CHANGE_USERNAME", payload: 'fabio' })}
      > set username </button>
      <button onClick={
        () => dispatch({ type: "CHANGE_EMAIL", payload: 'hello@fabiobiondi.io' })}
      > set email </button>
    </main>
  )
}