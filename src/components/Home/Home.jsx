import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Home() {

    const navigation = useNavigation();
    const location = useLocation()
    console.log(location)

    return (
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", minWidth: "600px", height: '600px' }}>
            <Navbar></Navbar>
            <h1 style={{ border: "4px solid tomato", padding: '12px', backgroundColor: 'rgba(255,0,0,0.45)', color: 'rgba(255,10,60)' }}>HOME</h1>
            {
                navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    )
}