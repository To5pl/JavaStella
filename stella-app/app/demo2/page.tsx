import { User } from '@/model/user';


export const metadata={
    title: 'Demo 2',
    description: 'This is the Demo 2 page',
    openGraph:{
        title: 'Demo 2',
        description: 'bla bla...'
    }
}


async function getData(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

export default async function Demo2() {
  const data = await getData();

  return (
    <main>
      <h1>Demo 2</h1>
      {
        data?.map(user => {
          return <li key={user.id}>{user.name}</li>
        })
      }
    </main>
  )
}