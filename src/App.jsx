import { useState,useEffect } from 'react'
import Displaylists from './Component/Displaylists'

function App() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch (error => console.error('Error fetching posts:', error));
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <Displaylists posts={posts} />
    </div>
  )
}
export default App;