import Job from '../workCard/workCard';
import {jobs} from './workData';
import './timeline.css'

const Work = () => {
  return (
    <div className='jobs'>
      {jobs.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </div>
  );
};

export default Work;
