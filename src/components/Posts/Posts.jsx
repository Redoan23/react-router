import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post"

export default function Posts() {

    const posts = useLoaderData()

    return (
        <div>
            <h2>There are {posts.length} posts</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)',gap:'5px'}}>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    )
}