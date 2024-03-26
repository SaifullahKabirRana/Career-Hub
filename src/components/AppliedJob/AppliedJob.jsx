import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJob = ({ appliedJob }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob;
    return (
        <div className="border border-[#E8E8E8] rounded-lg mb-4">
            <div className="p-4 md:p-8">
                <div className="flex gap-4 md:gap-8  justify-center items-center">
                    <div className="bg-[#F4F4F4] flex justify-center items-center rounded-lg ">
                        <img className="w-[500px] md:w-[170px] px-6 md:px-10 py-12 md:py-16" src={logo} alt="" />
                    </div>
                    <div className="flex items-center justify-end ">
                        <div className="">
                        <h2>{job_title}</h2>
                        <h3>{company_name}</h3>
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
                        </div>
                        <div className="md:ml-[800px] hidden md:block">
                            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-semibold">View Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppliedJob;