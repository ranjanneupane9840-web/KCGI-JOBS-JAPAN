import { useState } from "react";
import { motion } from "framer-motion";
import { searchJobs } from "../services/jobApi";
import {
  MapPinIcon,
  CurrencyYenIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const JobSearch = () => {
  const [location, setLocation] = useState("all");
  const [category, setCategory] = useState("all");
  const [minSalary, setMinSalary] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const numericSalary = parseInt(minSalary, 10) || 0;

      const results = await searchJobs({
        location: location === "all" ? "" : location,
        category: category === "all" ? "" : category,
        minSalary: numericSalary,
      });

      setFilteredJobs(results);
      setHasSearched(true);
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to fetch jobs. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="job-search" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:px-0 lg:py-10">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              Search student-friendly jobs in Japan
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              Filter real job opportunities by location, category, and minimum
              salary. Designed for international students.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm md:grid-cols-4 md:items-end"
        >
          {/* Location */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Location
            </label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="all">All</option>
              <option value="tokyo">Tokyo</option>
              <option value="osaka">Osaka</option>
              <option value="kyoto">Kyoto</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Category
            </label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="it">IT</option>
              <option value="teaching">Teaching</option>
              <option value="hospitality">Hospitality</option>
              <option value="retail">Retail</option>
              <option value="office">Office</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Min Salary (¥/hr)
            </label>
            <input
              type="number"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
              placeholder="1200"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div>
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={!isLoading ? { scale: 1.05 } : {}}
              whileTap={!isLoading ? { scale: 0.95 } : {}}
              className="w-full rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
            >
              {isLoading ? "Searching..." : "Search Jobs"}
            </motion.button>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Results */}
        {hasSearched && !isLoading && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredJobs.length === 0 ? (
              <p className="text-sm text-slate-600">
                No jobs found. Try different filters.
              </p>
            ) : (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                  <h4 className="font-semibold text-slate-900">{job.title}</h4>
                  <p className="text-xs text-slate-600">{job.company}</p>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      {job.locationLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <BriefcaseIcon className="h-4 w-4" />
                      {job.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1">
                      <CurrencyYenIcon className="h-4 w-4" />
                      ¥{job.salary}
                    </span>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobSearch;
