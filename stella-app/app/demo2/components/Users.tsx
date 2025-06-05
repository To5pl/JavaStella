import { getUsers } from '@/api/users.api';

export async function Users() {
  const users = await getUsers();

  return (<div>
    <h2>Users</h2>
    {
      users?.map(user => {
        return <li key={user.id}>{user.name}</li>
      })
    }
  </div>)
}