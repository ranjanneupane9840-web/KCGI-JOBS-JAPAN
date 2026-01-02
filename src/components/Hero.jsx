import React, { useEffect, useState } from "react";

const Hero = () => {
  /* 🔁 Background images */
  const bgImages = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  ];

  /* 👩‍🎓 Student card data */
  const students = [
    {
      name: "Neupane Ranjan  ネウパネ　ランザン",
      subtitle: "N5 Japanese language · Kyoto · Looking for IT job",
      initials: "NR",
      focus: "Part-time & internship",
      level: "JLPT N3",
      readiness: "78%",
      bar: "w-3/4",
    },
    {
      name: "Khanal Aashish カナル　アシス ",
      subtitle: "N4 Japanese language · kyoto · Looking for Job",
      initials: "KA",
      focus: "Cafe & service",
      level: "JLPT N4",
      readiness: "65%",
      bar: "w-2/3",
    },
    {
      name: "Tamang Suresh  タマン　スレス",
      subtitle: "N2 Japanese language · Kyoto · IT internship",
      initials: "TS",
      focus: "IT internship",
      level: "JLPT N2",
      readiness: "85%",
      bar: "w-4/5",
    },
     {
      name: "Withana Arachchige Don　Yasitha Naveen Lakranda ウィタナ　アラッチゲ　ドン　ヤシタ　ナヴィーン　ラクランダ",
      subtitle: "N4 Japanese language · kyoto · Looking for Job",
      initials: "WA",
      focus: "IT support",
      level: "JLPT N4",
      readiness: "65%",
      bar: "w-2/3",
    },
     {
      name: "Thelge　Hasitha Sandaruwan Peiris テルゲ　ハシタ　サンダルワン　ペイリス",
      subtitle: "N4 Japanese language · kyoto · Looking for Job",
      initials: "TH",
      focus: "IT support",
      level: "JLPT N4",
      readiness: "65%",
      bar: "w-2/3",
    },
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [studentIndex, setStudentIndex] = useState(0);

  /* ⏱ Slide every 3 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
      setStudentIndex((prev) => (prev + 1) % students.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const student = students[studentIndex];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* 🔁 Background slideshow */}
      <div className="absolute inset-0">
        <img
          src={bgImages[bgIndex]}
          alt="International students in Japan"
          className="h-full w-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/55 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-28 sm:px-6 lg:flex-row lg:justify-between lg:gap-10 lg:pt-32 lg:pb-24">
        
        {/* Left */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15">
            For international students in Japan
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold">
            Find part-time, internship, and entry-level jobs across Japan.
          </h1>

          <p className="mt-4 text-slate-100/90">
            KCGI Jobs Japan connects you to student-friendly job platforms,
            Japanese support, and life resources.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold shadow">
              Start Exploring Jobs
            </a>
            <a className="rounded-full bg-white/10 px-6 py-2.5 text-sm ring-1 ring-white/35">
              Browse Job Sites
            </a>
          </div>
        </div>

        {/* 🔁 Right: Sliding student card */}
        <div className="mt-10 w-full max-w-sm lg:mt-0">
          <div className="rounded-2xl bg-white/95 p-5 sm:p-6 text-slate-900 shadow-[0_22px_45px_rgba(15,23,42,0.45)] backdrop-blur transition-all duration-700">
            
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-slate-500">Sample student</p>
                <h2 className="mt-1 text-lg font-semibold">
                  {student.name} · KCGI student
                </h2>
                <p className="mt-1 text-xs text-slate-600">
                  {student.subtitle}
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white font-semibold text-sm">
                {student.initials}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-slate-50 p-3 shadow-sm">
                <p className="text-[11px] text-slate-500">Job focus</p>
                <p className="font-semibold">{student.focus}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 shadow-sm">
                <p className="text-[11px] text-slate-500">Japanese level</p>
                <p className="font-semibold">{student.level}</p>
              </div>
            </div>

            {/* Readiness */}
            <div className="mt-4 rounded-xl bg-slate-900 px-3 py-3 text-xs text-slate-100">
              <div className="flex justify-between">
                <span>Job readiness</span>
                <span className="font-semibold text-emerald-300">
                  {student.readiness}
                </span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-slate-700">
                <div className={`h-full ${student.bar} rounded-full bg-emerald-400`} />
              </div>
              <p className="mt-2 text-[11px] text-slate-200">
                Improve your score with better CVs and polite Japanese.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
