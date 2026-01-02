import React from "react";

const JobPlatforms = () => {
  return (
    <section id="job-sites" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-0 lg:py-10">
        <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-500">
              <span className="text-lg">💼</span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              Job Resources for International Students
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              Popular job search websites in Japan – find more opportunities across all sectors.
            </p>
          </div>

        {/* General Part-Time Job Sites */}
        <Section title="General Part-Time Job Sites">
          <JobCard
            title="Town Work タウンワーク"
            desc="Major part-time job portal with multilingual support."
            url="https://townwork.net"
          />
          <JobCard
            title="Baitoru バイトル"
            desc="Popular among students, features video job previews."
            url="https://www.baitoru.com"
          />
          <JobCard
            title="Indeed Japan"
            desc="International job search engine with Japanese listings."
            url="https://jp.indeed.com"
          />
          <JobCard
            title="Hello Work ハローワーク"
            desc="Government employment service, free to use."
            url="https://www.hellowork.mhlw.go.jp"
          />
        </Section>

        {/* International Student Focused */}
        <Section title="International Student Focused">
          <JobCard
            title="GaijinPot Jobs"
            desc="English-friendly jobs for foreigners in Japan."
            url="https://jobs.gaijinpot.com"
          />
          <JobCard
            title="Jobs in Japan"
            desc="Part-time and full-time jobs for English speakers."
            url="https://jobsinjapan.com"
          />
          <JobCard
            title="Daijob"
            desc="Bilingual and multilingual job opportunities."
            url="https://www.daijob.com"
          />
          <JobCard
            title="CareerCross"
            desc="Bilingual job search for professionals."
            url="https://www.careercross.com"
          />
        </Section>

        {/* Tech & IT */}
        <Section title="Tech & IT Specific" cols="md:grid-cols-3">
          <JobCard
            title="Green"
            desc="IT and web industry jobs in Japan."
            url="https://www.green-japan.com"
          />
          <JobCard
            title="Wantedly"
            desc="Startup and tech company positions."
            url="https://www.wantedly.com"
          />
          <JobCard
            title="Forkwell Jobs"
            desc="Jobs for engineers and developers."
            url="https://jobs.forkwell.com"
          />
        </Section>

        {/* Teaching */}
        <Section title="Teaching & English Jobs" cols="md:grid-cols-3">
          <JobCard
            title="GaijinPot Teaching"
            desc="English teaching jobs across Japan."
            url="https://jobs.gaijinpot.com"
          />
          <JobCard
            title="Ohayosensei"
            desc="Teaching jobs for educators in Japan."
            url="https://www.ohayosensei.com"
          />
          <JobCard
            title="Career Tasu"
            desc="Jobs for students and recent graduates."
            url="https://career-tasu.jp"
          />
        </Section>
        </div>
      </div>
    </section>
  );
};

/* Reusable helpers */

const Section = ({ title, cols = "md:grid-cols-2", children }) => (
  <div className="mt-6">
    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
      <span className="text-lg">•</span>
      {title}
    </h4>
    <div className={`mt-3 grid gap-4 ${cols}`}>{children}</div>
  </div>
);

const JobCard = ({ title, desc, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col justify-between rounded-2xl bg-slate-50 p-4 text-xs shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-indigo-50 hover:ring-indigo-200"
  >
    <div>
      <p className="font-heading text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
    <span className="mt-3 inline-flex w-max items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-indigo-600 ring-1 ring-indigo-100">
      Visit site
      <span aria-hidden="true">↗</span>
    </span>
  </a>
);

export default JobPlatforms;
