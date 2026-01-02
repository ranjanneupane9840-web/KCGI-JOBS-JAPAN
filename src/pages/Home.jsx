import React from 'react';
import Hero from '../components/Hero.jsx';
import JobSearch from '../components/JobSearch.jsx';
import JobPlatforms from '../components/JobPlatforms.jsx';
import JobApps from '../components/JobApps.jsx';
import LanguageResources from '../components/LanguageResources.jsx';
import TravelTips from '../components/TravelTips.jsx';
import SourcesCredits from '../components/SourcesCredits.jsx';

const Home = () => {
  return (
    <main id="home" className="min-h-screen bg-slate-50">
      <Hero />
      <JobSearch />
      <JobPlatforms />
      <JobApps />
      <LanguageResources />
      <TravelTips />
      <SourcesCredits />
    </main>
  );
};

export default Home;
