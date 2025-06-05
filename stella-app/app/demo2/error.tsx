'use client';

import Link from 'next/link';

export default function Error(
  { error, reset }: { error: Error, reset: () => void}
) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <Link href="/">Back to Home</Link>
      <hr/>
      <button onClick={reset}>try again!!</button>
    </div>
  )
}