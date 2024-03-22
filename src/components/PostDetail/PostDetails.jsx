import { useLoaderData, useNavigate } from "react-router-dom"

export default function PostDetails() {

    const post = useLoaderData()
    const { body, id } = post

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div style={{ backgroundColor: '#222233', color: '#AACCFF', padding: "30px", borderRadius: "10px", textAlign: 'center' }}>
            <h1>{id}</h1>
            <p>{body}</p>
            <button onClick={handleBack}>Back?</button>
        </div>
    )
}