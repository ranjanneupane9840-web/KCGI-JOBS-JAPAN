import React from "react";

const LanguageResources = () => {
  return (
    <section id="learn-japanese" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-0 lg:py-10">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Japanese Language Learning Resources
        </h3>
        <p className="mt-1 text-sm text-slate-600 max-w-2xl">
          Master Japanese from N5 to N1 with books, apps, and language centers.
        </p>

        {/* JLPT Levels */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-900">
            JLPT Levels Explained
          </h4>

          <div className="mt-3 grid gap-3 md:grid-cols-3 text-xs text-slate-700">
            <Level
              title="N5"
              desc="Beginner: Basic phrases, hiragana, katakana, ~100 kanji."
              phraseLink="#interview-phrases"
            />
            <Level
              title="N4"
              desc="Elementary: Simple daily topics, ~300 kanji."
              phraseLink="#interview-phrases"
            />
            <Level
              title="N3"
              desc="Intermediate: Daily situations, ~650 kanji."
              phraseLink="#interview-phrases"
            />
            <Level
              title="N2"
              desc="Advanced: Business Japanese, ~1000 kanji."
              phraseLink="#interview-phrases"
            />
            <Level
              title="N1"
              desc="Expert: Native-level fluency, 2000+ kanji."
              phraseLink="#interview-phrases"
            />
          </div>
        </div>

        {/* Books */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-900">
            Recommended Study Books
          </h4>

          <div className="mt-3 grid gap-3 md:grid-cols-2 text-xs text-slate-700">
            <Book level="N5–N4" title="Genki I & II" price="¥3,000–4,000" link="https://genki3.japantimes.co.jp/en/">
              Popular beginner textbooks covering grammar and conversation.
            </Book>

            <Book level="N5–N3" title="Minna no Nihongo" price="¥2,500–3,500" link="https://www.3anet.co.jp/np/en/books/">
              Used in language schools with structured lessons.
            </Book>

            <Book level="N3–N2" title="Tobira" price="¥3,800" link="https://tobira-textbook.com/en/">
              Bridge from intermediate to advanced Japanese.
            </Book>

            <Book level="N3–N1" title="Shin Kanzen Master" price="¥1,400–2,000" link="https://jlptbooks.com/collections/shin-kanzen-master">
              JLPT-focused books for grammar, reading, and listening.
            </Book>
          </div>

          <p className="mt-2 text-[11px] text-slate-500">
            📍 Available at Kinokuniya, Maruzen, Junkudo, and major online bookstores. Links above are
            for reference only; always check the latest edition and price.
          </p>
        </div>

        <p className="mt-4 text-xs text-slate-600">
          Combine textbooks with free apps like Duolingo and NHK Easy Japanese,
          and practice speaking at international centers or universities.
        </p>

        {/* Free online books & practice resources */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-900">
            Free online resources (PDFs &amp; practice questions)
          </h4>
          <p className="mt-1 text-xs text-slate-600 max-w-2xl">
            These links point to official or free JLPT practice materials and reading sites. They do not
            replace textbooks, but they are helpful for extra study without cost.
          </p>

          <div className="mt-3 grid gap-3 md:grid-cols-2 text-xs text-slate-700">
            <ResourceCard
              level="N5–N3"
              title="Official JLPT sample questions (Japan Foundation)"
              link="https://www.jlpt.jp/e/samples/forlearners.html"
            >
              Free sample questions and PDFs provided by the official JLPT organisers.
            </ResourceCard>
            <ResourceCard
              level="N5–N4"
              title="NHK Easy Japanese / Easy News"
              link="https://www3.nhk.or.jp/news/easy/"
            >
              Short news articles with furigana and simple vocabulary for daily reading practice.
            </ResourceCard>
            <ResourceCard
              level="N3–N2"
              title="Tadoku graded readers (free sample books)"
              link="https://tadoku.org/japanese/en/free-books"
            >
              A collection of graded readers with some free downloadable books for extensive reading.
            </ResourceCard>
            <ResourceCard
              level="N2–N1"
              title="JLPT official practice workbooks (overview)"
              link="https://www.jlpt.jp/e/reference/"
            >
              Information about official practice books and downloadable sample tasks for higher levels.
            </ResourceCard>
          </div>
        </div>

        {/* YouTube & online resources by level */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-900">
            YouTube &amp; online resources (N5–N1)
          </h4>
          <p className="mt-1 text-xs text-slate-600 max-w-2xl">
            These channels are widely used by learners for JLPT preparation. They are suggestions,
            not official endorsements. Always choose content that fits your level and learning style.
          </p>

          <div className="mt-3 grid gap-3 md:grid-cols-2 text-xs text-slate-700">
            <ResourceCard
              level="N5–N4"
              title="JapanesePod101 (YouTube)"
              link="https://www.youtube.com/@japanesepod101"
            >
              Beginner-friendly lessons, listening practice, and vocabulary for everyday situations.
            </ResourceCard>
            <ResourceCard
              level="N5–N3"
              title="Japanese Ammo with Misa"
              link="https://www.youtube.com/@JapaneseAmmowithMisa"
            >
              Clear grammar explanations in English, great for N5–N3 learners who like detailed breakdowns.
            </ResourceCard>
            <ResourceCard
              level="N3–N2"
              title="Miku Real Japanese"
              link="https://www.youtube.com/@MikuRealJapanese"
            >
              Natural-speed Japanese with English support, good for listening and real-life expressions.
            </ResourceCard>
            <ResourceCard
              level="N2–N1"
              title="Nihongo no Mori (日本語の森)"
              link="https://www.youtube.com/@nihongonomori"
            >
              Longer explanations and practice for higher JLPT levels, especially N2/N1 grammar.
            </ResourceCard>
          </div>
        </div>

        {/* Interview phrases & email examples */}
        <div className="mt-6" id="interview-phrases">
          <h4 className="text-sm font-semibold text-slate-900">
            Common interview phrases in Japanese (with English meaning)
          </h4>
          <p className="mt-1 text-xs text-slate-600 max-w-2xl">
            These short scripts help you handle typical part-time job interviews and
            phone calls. They are examples, not strict rules – adjust them to your style.
          </p>

          <div className="mt-3 grid gap-3 md:grid-cols-2 text-xs text-slate-700">
            <Phrase
              jp="本日は面接の機会をいただき、ありがとうございます。"
              en="Thank you very much for giving me the opportunity to interview today."
              context="Opening greeting in an interview."
            />
            <Phrase
              jp="学生ビザで在留しており、週２８時間以内で働くことができます。"
              en="I am on a student visa and can work up to 28 hours per week."
              context="Explaining your visa and work-hour limit."
            />
            <Phrase
              jp="土日と平日の夕方に働くことができます。シフトは柔軟に調整できます。"
              en="I can work on weekends and on weekday evenings, and I am flexible with shifts."
              context="Talking about your availability."
            />
            <Phrase
              jp="日本語はまだ勉強中ですが、仕事を通してもっと上達したいと考えています。"
              en="I am still studying Japanese, but I would like to improve further through work."
              context="Showing motivation when your Japanese is not perfect."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Small helper components */

const Level = ({ title, desc, phraseLink }) => (
  <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
    <p className="font-semibold">{title}</p>
    <p className="mt-1">{desc}</p>
    {phraseLink && (
      <a
        href={phraseLink}
        className="mt-2 inline-flex text-[11px] font-medium text-primary hover:underline"
      >
        View recommended interview phrases →
      </a>
    )}
  </div>
);

const Book = ({ level, title, price, link, children }) => (
  <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
    <p className="text-[11px] font-semibold text-slate-500">{level}</p>
    <p className="font-semibold">{title}</p>
    <p className="mt-1">{children}</p>
    <p className="mt-1 text-[11px] text-slate-500">{price}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex text-[11px] font-medium text-primary hover:underline"
      >
        View details ↗
      </a>
    )}
  </div>
);

const ResourceCard = ({ level, title, link, children }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-white p-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:ring-primary/40"
  >
    <p className="text-[11px] font-semibold text-slate-500">{level}</p>
    <p className="font-semibold">{title}</p>
    <p className="mt-1 text-slate-600">{children}</p>
  </a>
);

const Phrase = ({ jp, en, context }) => (
  <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
    <p className="text-[11px] font-semibold text-slate-500">Japanese</p>
    <p className="font-medium">{jp}</p>
    <p className="mt-2 text-[11px] font-semibold text-slate-500">English</p>
    <p>{en}</p>
    {context && (
      <p className="mt-1 text-[11px] text-slate-500">Context: {context}</p>
    )}
  </div>
);

export default LanguageResources;
