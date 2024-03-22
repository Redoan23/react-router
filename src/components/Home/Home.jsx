import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Home() {

    return (
        <div style={{display:"flex", flexDirection:'column', justifyContent:"space-between", minWidth:"600px", height:'600px'}}>
            <Navbar></Navbar>
            <h1 style={{border:"4px solid tomato", padding:'12px', backgroundColor:'rgba(255,0,0,0.45)', color:'rgba(255,10,60)' }}>HOME</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}