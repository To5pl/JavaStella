import { Posts } from '@/app/demo2/components/Posts';
import { Users } from '@/app/demo2/components/Users';
import { Suspense } from 'react';


export const metadata={
    title: 'Demo 2',
    description: 'This is the Demo 2 page',
    openGraph:{
        title: 'Demo 2',
        description: 'bla bla...'
    }
}

export default async function Demo2() {

  return (
    <main>
      <h1>Demo 2</h1>

      <Suspense fallback={<div>Fetching...</div>}>
        <Users />
      </Suspense>

      <Suspense fallback={<div>Fetching...</div>}>
        <Posts />
      </Suspense>
    </main>
  )
}