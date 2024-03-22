import { Link } from "react-router-dom";

export default function Users({ user }) {
    const { name, phone, id, email, website } = user;
    return (
        <div style={{ border: '3px solid red', backgroundColor: "#AA0000", color: "white", borderRadius:"13px", padding:'10px', margin:'15px' }}>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
            <p>email: {email}</p>
            <p style={{color:'orange'}}>Browse: {website}</p>
            <Link to={`/user/${id}`}><button style={{textShadow:"0px 0px 2px white,0px 0px 2px white, 0px -0px 2px white,0px -0px 2px #FF033E,0px -0px 2px #FF033E,0px -0px 2px #FF033E", color:'#ED1C24'}}>Details</button></Link>
        </div>
    )


}