import React from 'react';

const StudentResources = () => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Student resources: CV, interviews, and daily life
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            These resources help you prepare Japanese-style CVs, understand interview etiquette,
            and manage everyday life while working in Japan as a student.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-xs sm:text-sm text-slate-700">
          <div className="rounded-2xl bg-[#F7F8FC] p-4 shadow-card">
            <h2 className="font-heading text-sm font-semibold text-slate-900">
              CV / Resume tips for Japan
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Many employers expect a simple, clean Japanese-style rirekisho.</li>
              <li>Highlight availability, language skills, and reliability more than long work history.</li>
              <li>Ask a friend, teacher, or support center to review spelling and layout.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#F7F8FC] p-4 shadow-card">
            <h2 className="font-heading text-sm font-semibold text-slate-900">
              Interview etiquette
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Arrive 10–15 minutes early and dress neatly and simply.</li>
              <li>Silence your phone and avoid food or drinks during the interview.</li>
              <li>Listen carefully, answer clearly, and ask one or two polite questions at the end.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#F7F8FC] p-4 shadow-card">
            <h2 className="font-heading text-sm font-semibold text-slate-900">
              Daily life guidance
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Register at city hall, join health insurance, and open a bank account soon after arrival.</li>
              <li>Use IC cards (Suica, ICOCA) and budget monthly for rent, food, and utilities.</li>
              <li>Use university and city international centers for free advice and language practice.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentResources;
