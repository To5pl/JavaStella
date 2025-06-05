'use client';
import { PropsWithChildren, useState } from 'react';

export default function ClientComponent({ children}: PropsWithChildren) {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(s => s+1)}>
        Counter {value}
      </button>

      <div>Server Component here...</div>
      { children }
    </div>
  )
}