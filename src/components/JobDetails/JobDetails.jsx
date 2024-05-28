import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)


    const handleApplyJob = () =>{
        saveJobApplication(idInt)
        toast.success("You have applied successfully")

    }

    return (
        <div className="mt-28">
            <Helmet>
                <title>JobDetails: {id}</title>
            </Helmet>
            {/* <h2>Job Details of: {id}</h2> */}
            <div className="grid md:grid-cols-4 gap-6">
                <div className=" md:col-span-3">
                    <h2>Job Description: <span>{job.job_description}</span></h2>
                    <h2>job_responsibility: <span>{job.j}</span></h2>

                    <h2>Educational Requirements: <span>{job.educational_requirements}</span></h2>
                    <h2>Experiences: <span>{job.experiences}</span></h2>
                </div>

                <div className=""  >
                    <div className="p-8 bg-gradient-to-r from-[#eceeff] to-[#f6f1ff] rounded-lg">
                    <h2 className="text-[#1A1919] text-[27px] font-bold mb-6">Job Details</h2>
                    <hr />
                    <div className="mt-6 mb-4 ">
                        <p className="text-xl font-bold">Salary : <span className="text-[18px] font-medium">{job.salary} (Per Month)</span></p>
                    </div>
                    <div className="flex">
                        <p className="text-[20px]  font-bold">Job Title : <span className="text-[18px] font-medium">{job.job_title}</span></p>
                    </div>
                    <h2 className="text-[20px] font-bold mt-8 mb-6">Contact Information</h2>
                    <hr className="" />
                    <div className="mt-6 mb-4">
                        <p className="text-xl font-bold">Phone : <span className="text-[18px] font-medium">{job.contact_information.phone}</span></p>
                    </div>
                    <div>
                        <p className="text-xl font-bold mb-3">Email : <span className="text-[18px] font-medium">{job.contact_information.email}</span></p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">Address : <span className="text-[18px] font-medium">{job.contact_information.address}</span></p>
                    </div>
                    </div>
                    <div className="mt-6 mb-24">
                        <button onClick={handleApplyJob} className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF]
                        ">Apply Now</button>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;