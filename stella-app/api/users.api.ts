import { User } from '@/model/user';
export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  return res.json();
}