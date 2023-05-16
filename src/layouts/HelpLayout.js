import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return ( 
        <div className="container bg-white p-4 rounded my-4">
            <h2>Need some help ?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque esse nihil commodi veniam aspernatur deserunt consectetur et reiciendis quisquam quia.</p>


            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-link" to="faq" >Faq</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="contact" >Contact</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
     );
}
 
export default HelpLayout;