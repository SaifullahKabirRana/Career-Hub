import PropTypes from 'prop-types';

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite,job_type} = job;
    return (
        <div>
            
        </div>
    );
};

Job.propTypes = {
    job:PropTypes.object
    
};

export default Job;