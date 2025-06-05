import { Post } from '@/model/post';
import { User } from '@/model/user';


export const metadata={
    title: 'Demo 2',
    description: 'This is the Demo 2 page',
    openGraph:{
        title: 'Demo 2',
        description: 'bla bla...'
    }
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  return res.json();
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  return res.json();
}


async function getData(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store'
  })
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
}

export default async function Demo2() {
  const users = await getUsers();
  const posts = await getPosts();

  return (
    <main>
      <h1>Demo 2</h1>

      <h2>Users</h2>
      {
        users?.map(user => {
          return <li key={user.id}>{user.name}</li>
        })
      }

      <h2>Posts</h2>
      {
        posts?.map(post => {
          return <li key={post.id}>{post.title}</li>
        })
      }
    </main>
  )
}