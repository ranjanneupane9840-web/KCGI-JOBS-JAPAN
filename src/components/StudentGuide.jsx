import React from 'react';

const StudentGuide = () => {
  return (
    <section id="new-in-japan" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-0">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Complete Guide for New Students in Japan
        </h3>
        <p className="mt-1 text-sm text-slate-600 max-w-2xl">
          Essential information for international students arriving in Japan.
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2 text-xs text-slate-700">
          <div className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Before Arrival</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Student Visa (ryugaku): Apply with Certificate of Eligibility (COE).</li>
              <li>Prepare passport, COE, application, financial proof, photos, admission letter.</li>
              <li>Get international travel insurance for the initial period.</li>
              <li>Arrange temporary/permanent housing via university or agents.</li>
              <li>Bring enough cash (JPY) and inform your bank about international travel.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">First Week Tasks</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Residence Card: Receive at airport or immigration office – carry it always.</li>
              <li>City Hall Registration within 14 days at ward/city office.</li>
              <li>Join National Health Insurance (covers ~70% of medical costs).</li>
              <li>Open a bank account (Japan Post Bank or major banks).</li>
              <li>Get SIM/mobile contract and complete university registration.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Part-Time Work Permit</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Apply for "Permission to Engage in Activity Other Than Permitted".</li>
              <li>Work limit: max 28 hours/week (semester), 40 hours/week (breaks).</li>
              <li>Prohibited: adult entertainment industry (風俗).</li>
              <li>Income tax if you earn over ~JPY 88,000/month.</li>
              <li>My Number card: useful for taxes and administration.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Daily Life Essentials</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Get an IC card (ICOCA, Suica) for trains and buses.</li>
              <li>Use convenience stores for bills, ATM, and food 24/7.</li>
              <li>Shop smart: supermarkets (after 7pm discounts), 100-yen shops, Don Quijote.</li>
              <li>Learn trash separation rules for your area.</li>
              <li>
                Learn basic Japanese and know emergency numbers: 110 (police), 119 (fire/ambulance).
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Social &amp; Support</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Use university support: international office, counseling, career services.</li>
              <li>Join student clubs, circles (サークル), and meetup groups.</li>
              <li>Participate in festivals, university and community events.</li>
              <li>
                Join Facebook groups: "KCGI Students", "Foreigners in Kyoto", etc.
              </li>
              <li>Save embassy number, university emergency line, and trusted contacts.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Money Management</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>
                Monthly budget example: rent 40–70k, food 30–40k, utilities 10k, phone 3–5k JPY.
              </li>
              <li>Use student discounts for museums, transport, and software.</li>
              <li>Use Wise, Western Union, or bank transfers for remittance.</li>
              <li>Check scholarships: JASSO, MEXT, and private scholarships via your university.</li>
              <li>Year-end tax adjustment (年末調整) may give a tax refund from employer.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentGuide;
