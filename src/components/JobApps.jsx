import React from 'react';

const apps = [
  {
    name: 'Town Work',
    description:
      'Most popular part-time job app in Japan with video previews and instant notifications.',
    ios: 'https://apps.apple.com',
    android: 'https://play.google.com',
  },
  {
    name: 'Baitoru',
    description:
      'Watch workplace videos before applying. Great for students to see work environment.',
    ios: 'https://apps.apple.com',
    android: 'https://play.google.com',
  },
  {
    name: 'Indeed Japan',
    description:
      'English-friendly interface, job alerts, and easy application tracking.',
    ios: 'https://apps.apple.com',
    android: 'https://play.google.com',
  },
  {
    name: 'GaijinPot Jobs',
    description:
      'Specifically for foreigners in Japan. English teaching and bilingual positions.',
    ios: 'https://apps.apple.com',
    android: 'https://play.google.com',
  },
  {
    name: 'LINE BAITO',
    description:
      'Apply for jobs through LINE messenger. Simple chat-based applications.',
    ios: 'https://apps.apple.com',
    android: 'https://play.google.com',
  },
  {
    name: 'Wantedly',
    description:
      'Connect with startups and tech companies. Great for IT students.',
    ios: 'https://apps.apple.com',
    android: 'https://play.google.com',
  },
];

const JobApps = () => {
  return (
    <section id="job-apps" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-0">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Job Search Mobile Apps
        </h3>
        <p className="mt-1 text-sm text-slate-600 max-w-2xl">
          Download these apps to search for part-time jobs on the go.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {apps.map((app) => (
            <div
              key={app.name}
              className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
            >
              <h4 className="text-sm font-semibold text-slate-900">
                {app.name}
              </h4>
              <p className="mt-1 text-xs text-slate-600">{app.description}</p>
              <div className="mt-3 flex gap-3 text-[11px]">
                <a
                  href={app.ios}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200 hover:ring-primary/60"
                >
                  iOS
                </a>
                <a
                  href={app.android}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200 hover:ring-primary/60"
                >
                  Android
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobApps;
