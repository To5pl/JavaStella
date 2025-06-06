'use client';

import { LanguageContext } from './store/LanguageContextProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function NavBar() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Link href="/" className="text-white">Home</Link>
      <Link href="/demo1">Demo1</Link>
      <Link href="/demo2">Demo2</Link>
      <Link href="/demo3">Demo3</Link>
      <Link href="/demo4">Demo4</Link>
      - {language === 'it' ? '🇮🇹' : '🇬🇧'}
      <hr/>
    </div>
  )
}