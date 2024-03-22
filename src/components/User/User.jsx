import { useLoaderData } from "react-router-dom"
import Users from "../Users/Users"

export default function User() {
    const data = useLoaderData()
    return (
        <div>
            <h3>Total Users:{data.length}</h3>
            <div style={{display:'grid', gridTemplateColumns:"repeat(3, 1fr)"}}>
                {
                    data.map(user => <Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    )
}