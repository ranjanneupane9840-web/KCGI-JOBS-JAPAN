import React from 'react';

// Academic-style sources & image credits section for the project
const SourcesCredits = () => {
  return (
    <section id="sources" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-0 lg:py-10">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Sources &amp; Image Credits
        </h3>
        <p className="mt-1 text-sm text-slate-600 max-w-2xl">
          This project is a student, non-commercial website. The following sources were
          consulted for research and visual design. External materials are used only
          for academic comparison and inspiration.
        </p>

        {/* Job search websites */}
        <div className="mt-6 text-xs text-slate-700 space-y-2">
          <h4 className="text-sm font-semibold text-slate-900">
            Job search websites used for background research
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Indeed Japan – large-scale job search engine for Japanese listings.</li>
            <li>Townwork (タウンワーク) – regional part-time job portal.</li>
            <li>Baitoru (バイトル) – part-time jobs with workplace videos.</li>
            <li>Wantedly – mission-driven internships and early-career roles.</li>
            <li>Hello Work (ハローワーク) – public employment service operated under the Ministry of Health, Labour and Welfare.</li>
            <li>GaijinPot Jobs, Jobs in Japan, Daijob, CareerCross – job sites aimed at foreigners and bilingual candidates.</li>
          </ul>
        </div>

        {/* Official / government sources */}
        <div className="mt-6 text-xs text-slate-700 space-y-2">
          <h4 className="text-sm font-semibold text-slate-900">
            Official and government-related information
          </h4>
          <p>
            Information on visas, part-time work rules, and life in Japan was cross-checked
            against official and semi-official sources, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ministry of Health, Labour and Welfare / Hello Work guidance.</li>
            <li>Municipal international foundations and city information centers.</li>
            <li>University international offices and student support pages.</li>
          </ul>
          <p>
            These sources were used to summarise general rules. The website does not
            provide legal advice and encourages users to confirm details with official offices.
          </p>
        </div>

        {/* UI / design inspiration */}
        <div className="mt-6 text-xs text-slate-700 space-y-2">
          <h4 className="text-sm font-semibold text-slate-900">UI and design inspiration</h4>
          <p>
            The visual design takes inspiration from modern web applications and job
            platforms (e.g., Indeed Japan, Townwork, Baitoru, Wantedly, Notion, Stripe,
            and Wix templates). All interface components in this project are original
            implementations created for academic purposes.
          </p>
        </div>

        {/* Images and media */}
        <div className="mt-6 text-xs text-slate-700 space-y-2">
          <h4 className="text-sm font-semibold text-slate-900">Images and media</h4>
          <p>
            Royalty-free photos and illustrations were sourced from free image libraries,
            mainly Unsplash, Pexels, and Pixabay. Only content with permissive licenses
            suitable for educational use was selected.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Images were chosen or edited to avoid showing identifiable individuals,
              store names, or brand logos whenever possible.
            </li>
            <li>
              Screenshots of the "KCGI Jobs Japan" interface are original work created
              for this project.
            </li>
            <li>
              Any small screenshots from external job sites, if used in the report,
              are included only for academic analysis and are cropped and anonymised.
            </li>
          </ul>
        </div>

        {/* Copyright statement */}
        <div className="mt-6 text-[11px] text-slate-500">
          <p>
            This website is produced as a university student project for non-commercial
            educational purposes. External websites and images are referenced for
            research, comparison, and design inspiration. No job listings or proprietary
            layouts are copied verbatim; all UI components and explanatory texts are
            written specifically for this project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SourcesCredits;
