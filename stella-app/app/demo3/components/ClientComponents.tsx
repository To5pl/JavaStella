'use client';
import { useState } from 'react';

export default function ClientComponent() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(s => s+1)}>
        Counter {value}
      </button>
    </div>
  )
}