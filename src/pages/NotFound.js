import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-white p-5 text-center mx-auto shadow-sm" style={{
            maxWidth: '600px'
        }}>
            <h1 className="text-danger display-3 my-4">404 Error</h1>
            <h3>Page not found</h3>
            <p className="text-muted mb-4">Ooops, something goes wrong...</p>
            <Link to="/" className="text-primary text-decoration-none">Return to Home Page</Link>
        </div>
    );
}

export default NotFound;