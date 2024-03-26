import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter == 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobsIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

            // console.log(jobs, storedJobsIds, jobsApplied)
        }

    }, [jobs])

    return (
        <div>
            <h2>Jobs i applied: {appliedJobs.length}</h2>
            <div className="text-center ">
                <ul className="menu lg:menu-horizontal rounded-box bg-green-400 mb-8">
                    <li>
                        <details open>
                            <summary >Filter By</summary>
                            <ul>
                                <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                                <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                                <li onClick={() => handleJobsFilter('onsite')}><a>OnSite</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            <div className="">
                {
                    displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;