import Job from '../workCard/workCard';
import {jobs, schools} from './workData';
import './timeline.css';

const Work = ({work = false, education = false}) => {
  const returnWork = () => {
    return (
      <div className="jobs">
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    );
  };

  const returnEducation = () => {
    return (
      <div className="jobs">
        {schools.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
    );
  };
  return (
    <>
      {work ? returnWork() : null}
      {education ? returnEducation() : null}
    </>
  );
};

export default Work;
