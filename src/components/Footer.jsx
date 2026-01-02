import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-0">
        <p>
          © {new Date().getFullYear()} KCGI Jobs Japan. Created as a leadership
          project for supporting international students-katerina_GR_02.
        </p>
        <p className="text-[11px]">
          Always check your visa conditions and local regulations before
          accepting any job.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
