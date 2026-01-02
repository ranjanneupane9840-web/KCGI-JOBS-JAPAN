import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import JobPlatformsPage from './pages/JobPlatformsPage.jsx';
import PartTimeGuide from './pages/PartTimeGuide.jsx';
import LanguageSupport from './pages/LanguageSupport.jsx';
import StudentResources from './pages/StudentResources.jsx';
import AboutContact from './pages/AboutContact.jsx';
import SourcesPage from './pages/SourcesPage.jsx';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-platforms" element={<JobPlatformsPage />} />
          <Route path="/part-time-guide" element={<PartTimeGuide />} />
          <Route path="/language-support" element={<LanguageSupport />} />
          <Route path="/student-resources" element={<StudentResources />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
