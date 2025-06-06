"use client";

import useUsers from '../store/users.store';

export default function Demo6() {

  const users = useUsers(state => state.users)

  return (
    <main>
      <h1>zustand demo</h1>

      {
        users.map(item => {
          return <li key={item.id}>{item.name}</li>
        })
      }
    </main>
  )
}