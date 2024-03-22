import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <span>Here is the link to the other pages</span>
            <div style={{display:"flex", gap:'10px', justifyContent:'center'}}>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/connections">Connections</Link>
                <Link to="/header">Header</Link>
                <Link to="/user">User</Link>
            </div>
        </div>
    )
}