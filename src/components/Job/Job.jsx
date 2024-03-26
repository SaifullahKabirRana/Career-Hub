import PropTypes from 'prop-types';
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, salary, location } = job;
    return (
        <div>
            <div className=" card card-compact bg-base-100 shadow-lg">
                <div className='p-10'>
                    <img src={logo} alt="logo" />
                    <div className="mt-8">
                        <h2 className="card-title">{job_title}</h2>
                        <p className='mt-2'>{company_name}</p>
                        <div className='flex gap-2 mt-4'>
                            <h2 className='border border-[#7E90FE] text-[#7E90FE] px-4 py-1 rounded-md font-bold'>{remote_or_onsite}</h2>
                            <p className='border border-[#7E90FE] text-[#7E90FE] px-4 py-1 rounded-md font-bold '>{job_type}</p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <h2 className='flex gap-1 items-center'>
                                <GrLocation className='text-2xl'></GrLocation>
                                {location}
                            </h2>
                            <p className='flex gap-1 items-center'>
                                <AiOutlineDollar className='text-2xl'></AiOutlineDollar>
                                {salary}
                            </p>
                        </div>
                        <div className=" mt-6">
                            <Link to={`/job/${id}`}>
                                <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-semibold">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object

};

export default Job;