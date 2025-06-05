import { getUsers } from '@/api/users.api';

export async function ServerComponent() {
  const users = await getUsers();

  return <div>
    <h1>Server Component</h1>

    {
      users?.map(user => {
        return <li key={user.id}>{user.name}</li>
      })
    }
  </div>
}