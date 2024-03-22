import { useLoaderData } from "react-router-dom"

export default function PostDetails() {

    const post = useLoaderData()
    const { body, id } = post

    return (
        <div style={{backgroundColor:'#222233', color:'#AACCFF', padding:"30px", borderRadius:"10px", textAlign:'center'}}>
            <h1>{id}</h1>
            <p>{body}</p>
        </div>
    )
}