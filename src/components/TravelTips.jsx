import React from 'react';

const TravelTips = () => {
  return (
    <section id="travel" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-0">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Real student job experiences &amp; common mistakes
        </h3>
        <p className="mt-1 text-sm text-slate-600 max-w-2xl">
          Learn from actual international student journeys in Japan: how they found jobs,
          what went wrong, and what they would do differently. These stories make the
          rules and advice on this site more concrete.
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2 text-xs text-slate-700">
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Case Study: N4 student in Kyoto</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>JR Pass: Great for visiting friends/family who are tourists.</li>
              <li>Seishun 18 Kippu: Unlimited JR local trains for 1 day (seasonal).</li>
              <li>Student Commuter Pass (定期券): Discounted monthly pass for school route.</li>
              <li>City bus passes in Kyoto, Osaka, Tokyo for unlimited travel.</li>
              <li>Night buses: Cheap overnight travel (Willer Express, JR Bus).</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Must-Visit Places from Kyoto</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Osaka – Dotonbori, Osaka Castle, street food.</li>
              <li>Nara – Friendly deer, Todaiji Temple, peaceful parks.</li>
              <li>Kobe – Port city, Chinatown, night views from Rokko Mountain.</li>
              <li>Hiroshima – Peace Memorial, Miyajima Island.</li>
              <li>Tokyo – Shibuya, Akihabara, museums, modern culture.</li>
              <li>Mount Fuji – Day trip from Tokyo, Fuji Five Lakes area.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Budget Travel Tips</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Stay in hostels, capsule hotels, manga cafés for cheap nights.</li>
              <li>Eat convenience store meals and discounted supermarket bentos.</li>
              <li>Enjoy free activities: temples, shrines, parks, free museum days.</li>
              <li>Use highway buses for long distances instead of trains.</li>
              <li>Avoid peak seasons (Golden Week, Obon, New Year) for cheaper travel.</li>
              <li>Always carry your student ID for discounts.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Essential Travel Apps</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Google Maps / NAVITIME: best for navigation and train routes.</li>
              <li>Hyperdia: detailed train times and costs.</li>
              <li>Tabelog: restaurant reviews and ratings.</li>
              <li>PayPay: mobile payments used widely.</li>
              <li>Google Translate: camera translation for menus, signs.</li>
              <li>Weather: Tenki.jp or Yahoo Weather Japan.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">Seasonal Experiences</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Spring: cherry blossoms (sakura), hanami, pleasant weather.</li>
              <li>Summer: festivals (matsuri), fireworks, beaches (but hot &amp; humid).</li>
              <li>Autumn: fall foliage (koyo), comfortable temperatures.</li>
              <li>Winter: skiing, onsen, illuminations, New Year traditions.</li>
              <li>Golden Week: very busy – book early or travel at other times.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-amber-200">
            <h4 className="font-semibold text-slate-900">Common mistakes international students make when applying</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Not checking whether the job is allowed under a student visa (night work, adult industry).</li>
              <li>Sending very casual messages or emojis to managers on LINE without polite language.</li>
              <li>Arriving just on time or a little late to interviews instead of 10–15 minutes early.</li>
              <li>Accepting unpaid "trial shifts" without understanding if it is legal and fair.</li>
              <li>Not asking for help from university career centers or local support organizations.</li>
              <li>Ignoring payslips and tax documents, which can cause problems later.</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <h4 className="font-semibold text-slate-900">How to avoid these mistakes</h4>
            <ul className="mt-2 list-disc pl-4 space-y-1">
              <li>Read your contract slowly, or ask a Japanese friend or advisor to check key points.</li>
              <li>Prepare simple Japanese phrases before phone calls and interviews (see our language section).</li>
              <li>Keep a record of your weekly hours to stay within the 28-hour limit.</li>
              <li>Ask politely about night shifts, overtime, and payment for training before you start.</li>
              <li>Use official and university support services (Hello Work, international offices, city centers).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
