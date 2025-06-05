import { getPosts } from '@/api/posts.api';
import { getUsers } from '@/api/users.api';


export const metadata={
    title: 'Demo 2',
    description: 'This is the Demo 2 page',
    openGraph:{
        title: 'Demo 2',
        description: 'bla bla...'
    }
}

export default async function Demo2() {
  const usersData = await getUsers();
  const postsData = await getPosts();

  const [users, posts] = await Promise.all([ usersData, postsData ])

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