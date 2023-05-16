import { Outlet } from "react-router";

const JobLayout = () => {
    return ( 
        <div className="container my-4">
            <h2 className="text-lead mb-4">Want to see some jobs ?</h2>

            <Outlet />
        </div>
     );
}
 
export default JobLayout;