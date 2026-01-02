import React from 'react';
import JobPlatforms from '../components/JobPlatforms.jsx';
import JobApps from '../components/JobApps.jsx';

const JobPlatformsPage = () => {
  return (
    <div className="bg-slate-50">
      <JobPlatforms />
      <JobApps />
    </div>
  );
};

export default JobPlatformsPage;
