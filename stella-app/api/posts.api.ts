import { Post } from '@/model/post';
export async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return res.json();
}