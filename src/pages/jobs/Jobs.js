import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {

    const jobs = useLoaderData();

    return ( 
        <div className="mb-4">
            { jobs.map(job => (
                <div className="bg-white p-3 rounded-3 my-3" key={job.id}>
                    <Link to={job.id.toString()} className="text-decoration-none text-primary lead">{job.title}</Link>
                    <p className="text-muted">{job.location}</p>
                </div>
            )) }
        </div>
     );
}
 
export default Jobs;


export const getJobs = async () => {
    const res = await fetch('http://localhost:4000/jobs');
    if(!res.ok) {
        throw Error('Failed to load the jobs');
    }

    return res.json();
}