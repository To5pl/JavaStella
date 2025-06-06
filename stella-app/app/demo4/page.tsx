"use client";

import { LanguageContext } from '../store/LanguageContextProvider';
import { useContext } from 'react';

export default function Demo4() {
  
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <main>
      <h1>lang: {language} </h1>
      <button onClick={() => setLanguage('it')}> IT </button>
      -
      <button onClick={() => setLanguage('en')}> EN </button>
    </main>
  )
}