import { getPosts } from '@/api/posts.api';

export async function Posts() {
  const posts = await getPosts();

  return (<div>
    <h2>Posts</h2>
    {
      posts?.map(post => {
        return <li key={post.id}>{post.title}</li>
      })
    }
  </div>)
}