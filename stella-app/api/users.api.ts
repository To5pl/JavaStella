import { User } from '@/model/user';
export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return res.json();
}