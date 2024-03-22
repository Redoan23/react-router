import { useLoaderData } from "react-router-dom"
import Users from "../Users/Users"

export default function User() {
    const data = useLoaderData()
    
    console.log(data)
    return (
        <div>
            <h3>Total Users:{data.length}</h3>
            <div style={{display:'grid', gridTemplateColumns:"repeat(3, 1fr)"}}>
                {
                    data.map(user => <Users user={user}></Users>)
                }
            </div>
        </div>
    )
}