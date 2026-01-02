import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Clean, Wix-style sticky navigation bar
const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const baseLink =
    'text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors';

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200/70">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo / brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-semibold">
            KJ
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-semibold tracking-tight text-slate-900">
              KCGI Jobs Japan
            </span>
            <span className="text-[11px] text-slate-500">
              Jobs & life support for intl. students
            </span>
          </div>
        </Link>

        {/* Main links */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? 'text-slate-900' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/job-platforms"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? 'text-slate-900' : ''}`
              }
            >
              Job Platforms
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/part-time-guide"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? 'text-slate-900' : ''}`
              }
            >
              Part-Time Guide
            </NavLink>
          </li>

          {/* Language & Support dropdown (click to open) */}
          <li className="relative">
            <button
              type="button"
              className={`${baseLink} inline-flex items-center gap-1 focus:outline-none`}
              onClick={() => setIsLangOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={isLangOpen}
            >
              <span>Language &amp; Support</span>
              <span className="text-[9px]">▾</span>
            </button>
            <div
              className={`absolute left-0 top-full mt-2 w-60 rounded-xl bg-white py-2 text-xs text-slate-700 shadow-lg ring-1 ring-slate-200 ${
                isLangOpen ? 'block' : 'hidden'
              }`}
            >
              <NavLink
                to="/language-support"
                className="block px-3 py-1.5 hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setIsLangOpen(false)}
              >
                Language support &amp; phrases
              </NavLink>
              <NavLink
                to="/student-resources"
                className="block px-3 py-1.5 hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setIsLangOpen(false)}
              >
                Student resources (CV, interviews)
              </NavLink>
              <NavLink
                to="/sources"
                className="block px-3 py-1.5 hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setIsLangOpen(false)}
              >
                Sources &amp; image credits
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? 'text-slate-900' : ''}`
              }
            >
              About / Contact
            </NavLink>
          </li>
        </ul>

        {/* Right side intentionally left minimal for now (no extra CTA button) */}
        <div className="hidden sm:block" aria-hidden="true" />
      </nav>
    </header>
  );
};

export default Navbar;
