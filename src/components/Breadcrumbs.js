import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {

    const location = useLocation();
    let currentLink = '';
                        
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '')
        .map(crumb => {
        currentLink += `/${crumb}`
        
        return (
            <li className="breadcrumb-item text-capitalize">
                <Link to={currentLink}>{ crumb }</Link>
            </li>
        )
    })
                    

    return ( 
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                { crumbs }
            </ol>
        </nav>
        
     );
}
 
export default Breadcrumbs;