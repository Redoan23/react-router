import { useLoaderData, useNavigate } from "react-router-dom"

export default function Details() {
    const navigate = useNavigate()
    const data = useLoaderData()
    const { name, email, phone, id, website } = data;

    function handleNavigate() {
        navigate(-1)
    }

    return (
        <div>
            <h3>name: {name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>{website}</p>

            <button id="btn" style={{ backgroundColor: 'salmon', color: 'white' }} onClick={handleNavigate}>Go Back</button>
        </div>
    )
}