import { useLoaderData, useParams } from "react-router";

const JobDetails = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return ( 
        <div className="bg-white p-3 rounded-3 my-3">
            <h4 className="my-3">Job details for <span className="text-primary">{ job.title } </span> </h4>
            <p>Starting salary: <span className="text-success fw-bold">{ job.salary }£</span></p>
            <p>Location : { job.location }</p>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium odit consectetur dicta velit impedit facere maiores debitis accusamus minima. Ex accusamus nisi aliquam, laboriosam recusandae eligendi eaque soluta iste nobis placeat possimus blanditiis illum eos, magni tenetur voluptatum, voluptatem necessitatibus ipsa repudiandae id maiores qui. Odit totam magni non.</p>
        </div>
     );
}
 
export default JobDetails;


export const getJobDetails = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/jobs/' + id);
    if(!res.ok) {
        throw Error('Could not find this job');
    }
    return res.json();
}