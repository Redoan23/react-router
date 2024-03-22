import { Link, Outlet } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h3>This is header</h3>
            <h5>you may probably never see something like this, please, atleast click <Link to='/user'>User</Link>  to see some data</h5>
           
    
        </div>
    )
}