import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <span>Here is the link to the other pages</span>
            <div style={{display:"flex", gap:'10px', justifyContent:'center'}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/connections">Connections</NavLink>
                <NavLink to="/header">Header</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/user">User</NavLink>
            </div>
        </div>
    )
}