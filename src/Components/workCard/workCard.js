import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';

import './workCard.css';


const Job = ({job}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="jobContainer">
      <div className="avatarContainer">
        <Avatar
          src={job.src}
          alt={job.company}
          sx={{bgcolor: job.color, width: '3rem', height: '3rem'}}
        />
      </div>
      <div className="jobDetails">
        <div>
          <div className="companyDateContiner">
            <div className="expandJob">
              <Typography
                variant="subtitle1"
                sx={{textAlign: 'left', fontWeight: '600', fontSize: '0.75rem'}}
              >
                {job.company}
              </Typography>
              {isExpanded ? (
                <ExpandLessIcon onClick={handleToggle} fontSize="small" />
              ) : (
                <ExpandMoreIcon onClick={handleToggle} fontSize="small" />
              )}
            </div>
            <div className="date">
              <Typography
                variant="body2"
                sx={{textAlign: 'left', fontWeight: '200', fontSize: '0.75rem'}}
                color="textSecondary"
              >
                {job.duration}
              </Typography>
            </div>
          </div>
          <div className="jobPositionContiner">
            <Typography
              variant="body2"
              sx={{textAlign: 'left', fontWeight: '200', fontSize: '0.75rem'}}
            >
              {job.role}
            </Typography>
          </div>
        </div>

        <div className={`jobDescriptionContainer ${isExpanded ? 'show' : ''}`}>
          <Typography
            variant="body2"
            sx={{textAlign: 'left', fontWeight: '200', fontSize: '0.75rem'}}
          >
            {isExpanded ? job.description : job.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Job;
