"use client";

import useUsers from '@/app/store/users.store';

export default function Demo5() {
  const users = useUsers(state => state.users)
  const remove = useUsers(state => state.remove)
  const add = useUsers(state => state.add)

  return (
    <main>
      <h1>zustand demo</h1>

      <button onClick={() => {
        const now = Date.now();
        add({id: now, name: `User ${now}`})
      }}>Add user</button>

      {
        users.map(item => {
          return <li key={item.id}>
            {item.name}
            <button onClick={() => remove(item.id)}>delete</button>
          </li>
        })
      }
    </main>
  )
}