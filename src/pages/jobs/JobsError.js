import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const JobsError = () => {
    const error = useRouteError();

    return ( 
        <div className="bg-white mx-auto p-4 my-4  rounded" style={{ maxWidth: '600px' }}>
            <h2 className="fw-bold">Error</h2>
            <p className="text-muted">Ooops, something goes wrong...</p>
            <p className="text-danger border-danger border-start border-4 p-3 bg-danger bg-opacity-10">{ error.message }</p>
            <Link to="/" className="text-decoration-none text-primary">Return to home page</Link>
        </div>
     );
}
 
export default JobsError;