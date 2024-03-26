import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-24">
                <h2 className="text-[48px] text-[#1A1919] font-extrabold">Featured Jobs: {jobs.length}</h2>
                <p className="text-[16px] text-[#757575] font-medium mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center mt-8 mb-24 ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button
                    onClick={()=> setDataLength(jobs.length)}
                    className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-semibold">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;