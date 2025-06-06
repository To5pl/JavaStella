'use client';

import { ProfileContext } from '@/app/store/ProfileContextProvider';

import React, { useContext } from 'react';
import { LanguageContext } from './store/LanguageContextProvider';

export default function NavBar() {
  const { state, dispatch } = useContext(ProfileContext);
  
  return (
    <div>
      <a href="/">Home</a>
      <a href="/demo1">Demo1</a>
      <a href="/demo2">Demo2</a>
      <a href="/demo3">Demo3</a>
      <a href="/demo4">Demo4</a>
      <a href="/demo5">Demo5</a>
      <a href="/demo5">Demo6</a>
      - { state.email } | { state.username }
      
      <hr/>
    </div>
  )
}