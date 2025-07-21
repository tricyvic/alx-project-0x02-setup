import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { PostProps } from '@/interfaces';
import React, { useState } from 'react'

const posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  
  return (
    <div>
        <Header/>
        {posts.map((p)=>(
          <PostCard title={p.title} content={p.content} userId={p.userId}/>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()
  console.log(posts.userId)

  return {
    props: {
      posts
    }
  }
}

export default posts

