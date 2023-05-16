import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
    return ( 
        <div>
            <header>
                <Navbar/>
                <div className="container my-4">
                    <Breadcrumbs/>
                </div>
            </header>
            <div className="container-fluid my-4">
                <Outlet />
            </div>
        </div>
     );
}
 
export default RootLayout;