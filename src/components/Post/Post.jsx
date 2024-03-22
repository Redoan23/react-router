import { useNavigate } from "react-router-dom"
import PostDetails from "../PostDetail/PostDetails"

export default function Post({ post }) {
    const { title, id, userId, body } = post
    const navigate = useNavigate()

    const handlePost = () => {
        navigate(`${id}`)
    }

    return (
        <div style={{ border: '2px solid black', borderRadius: "5px", padding: '25px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <p style={{ fontWeight: "1000" }}>{id}</p>
            <h2 style={{ color: "coral" }}>{title}</h2>
            <button style={{backgroundColor:'lightcoral'}} onClick={handlePost}>See Post</button>
            
        </div>
    )
}