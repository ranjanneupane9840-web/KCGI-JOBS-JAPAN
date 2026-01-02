import React from 'react';

const AboutContact = () => {
  return (
    <div className="bg-[#F7F8FC]">
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl space-y-8">
          <header>
            <h1 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              About KCGI Jobs Japan
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              KCGI Jobs Japan is a student-created website for international students in Japan.
              Its purpose is to explain job search platforms, work rules, language tips, and daily life
              in a clear, friendly way.
            </p>
          </header>

          <section className="rounded-2xl bg-white p-4 shadow-card text-xs sm:text-sm text-slate-700">
            <h2 className="font-heading text-sm font-semibold text-slate-900">
              Educational disclaimer
            </h2>
            <p className="mt-2">
              This website is part of a university project and is intended solely for educational and
              informational purposes. While care has been taken to summarise reliable information,
              the content may not reflect the latest legal requirements or individual circumstances.
            </p>
            <p className="mt-2">
              Users should always confirm important details with official sources such as immigration
              services, local government offices, Hello Work, and their university's international
              student office. The project does not provide legal advice or guarantee employment outcomes.
            </p>
          </section>

          <section className="rounded-2xl bg-white p-4 shadow-card text-xs sm:text-sm text-slate-700">
            <h2 className="font-heading text-sm font-semibold text-slate-900">
              Contact (demo)
            </h2>
            <p className="mt-2">
              For questions or feedback about this project, you may contact the student author via email.
              Please do not send confidential personal information or job applications.
            </p>
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] font-medium text-slate-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-medium text-slate-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] font-medium text-slate-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Questions, feedback, or suggestions about the site."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Send (demo only)
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
