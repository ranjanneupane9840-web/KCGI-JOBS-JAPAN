// Adzuna Job Search API Integration
// Sign up for free API key at: https://developer.adzuna.com/

const ADZUNA_APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;
const ADZUNA_APP_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;
const BASE_URL = 'https://api.adzuna.com/v1/api/jobs';

// Location mapping for Japan cities
const locationMapping = {
  kyoto: 'Kyoto',
  osaka: 'Osaka',
  tokyo: 'Tokyo',
  remote: 'remote'
};

// Category keyword mapping
const categoryMapping = {
  it: 'IT software development programming',
  teaching: 'teacher tutor education teaching',
  hospitality: 'hotel restaurant cafe hospitality service',
  retail: 'retail store sales shop',
  office: 'office administrator data entry'
};

/**
 * Search jobs using Adzuna API
 * @param {Object} filters - Search filters
 * @param {string} filters.location - Location filter (kyoto, osaka, tokyo, remote)
 * @param {string} filters.category - Category filter (it, teaching, hospitality, retail, office)
 * @param {number} filters.minSalary - Minimum salary filter (hourly in yen)
 * @returns {Promise<Array>} Array of job listings
 */
export const searchJobs = async (filters = {}) => {
  try {
    // Check if API credentials are configured
    if (!ADZUNA_APP_ID || !ADZUNA_APP_KEY) {
      console.warn('Adzuna API credentials not configured. Using fallback data.');
      return getFallbackJobs(filters);
    }

    const { location = '', category = '', minSalary = 0 } = filters;

    // Build search query
    const searchTerms = [];
    if (category && categoryMapping[category]) {
      searchTerms.push(categoryMapping[category]);
    }
    
    const locationQuery = location && location !== 'all' 
      ? locationMapping[location] || '' 
      : '';

    // Adzuna API parameters
    const params = new URLSearchParams({
      app_id: ADZUNA_APP_ID,
      app_key: ADZUNA_APP_KEY,
      results_per_page: 20,
      what: searchTerms.join(' '),
      where: locationQuery
    });

    // Call Adzuna API for Japan
    const response = await fetch(
      `${BASE_URL}/jp/search/1?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    // Transform Adzuna data to our format
    const jobs = data.results.map(job => ({
      id: job.id,
      title: job.title,
      company: job.company.display_name,
      location: job.location.display_name,
      locationLabel: job.location.display_name,
      category: inferCategory(job),
      categoryLabel: inferCategoryLabel(job),
      type: job.contract_time || 'Full-time',
      salary: calculateHourlySalary(job.salary_min, job.salary_max),
      description: job.description,
      url: job.redirect_url,
      created: job.created,
      tags: extractTags(job)
    }));

    // Apply minimum salary filter
    const filteredJobs = minSalary > 0
      ? jobs.filter(job => job.salary >= minSalary)
      : jobs;

    return filteredJobs;

  } catch (error) {
    console.error('Error fetching jobs from Adzuna:', error);
    // Return fallback data on error
    return getFallbackJobs(filters);
  }
};

/**
 * Calculate hourly salary from annual/monthly salary
 * Assumes 160 hours per month, 12 months per year
 */
const calculateHourlySalary = (salaryMin, salaryMax) => {
  if (!salaryMin && !salaryMax) return 1200; // Default
  
  const avgSalary = salaryMin && salaryMax 
    ? (salaryMin + salaryMax) / 2 
    : salaryMin || salaryMax;

  // Convert annual to hourly (assuming full-time: 160 hrs/month * 12 months)
  const hourlyRate = Math.round(avgSalary / (160 * 12));
  
  return hourlyRate || 1200;
};

/**
 * Infer category from job data
 */
const inferCategory = (job) => {
  const title = job.title.toLowerCase();
  const desc = (job.description || '').toLowerCase();
  const combined = title + ' ' + desc;

  if (/\b(it|software|developer|programming|engineer|tech)\b/i.test(combined)) {
    return 'it';
  }
  if (/\b(teacher|tutor|education|teaching|instructor)\b/i.test(combined)) {
    return 'teaching';
  }
  if (/\b(hotel|restaurant|cafe|hospitality|service|waiter)\b/i.test(combined)) {
    return 'hospitality';
  }
  if (/\b(retail|store|sales|shop|cashier)\b/i.test(combined)) {
    return 'retail';
  }
  if (/\b(office|admin|data entry|clerk)\b/i.test(combined)) {
    return 'office';
  }
  
  return 'other';
};

/**
 * Get category label
 */
const inferCategoryLabel = (job) => {
  const category = inferCategory(job);
  const labels = {
    it: 'IT/Tech',
    teaching: 'Teaching',
    hospitality: 'Hospitality',
    retail: 'Retail',
    office: 'Office',
    other: 'Other'
  };
  return labels[category] || 'Other';
};

/**
 * Extract tags from job data
 */
const extractTags = (job) => {
  const tags = [];
  
  if (job.contract_type) tags.push(job.contract_type);
  if (job.contract_time) tags.push(job.contract_time);
  if (/remote|work from home/i.test(job.title + ' ' + (job.description || ''))) {
    tags.push('Remote');
  }
  if (/part.time|part time/i.test(job.title + ' ' + (job.description || ''))) {
    tags.push('Part-time');
  }
  if (/student/i.test(job.title + ' ' + (job.description || ''))) {
    tags.push('Student Friendly');
  }
  
  return tags.slice(0, 3); // Limit to 3 tags
};

/**
 * Fallback mock data when API is unavailable
 */
const getFallbackJobs = (filters) => {
  const { location = '', category = '', minSalary = 0 } = filters;
  
  const mockJobs = [
    {
      id: 'mock-1',
      title: 'Convenience Store Staff',
      company: 'FamilyMart',
      location: 'Kyoto',
      locationLabel: 'Kyoto',
      category: 'retail',
      categoryLabel: 'Retail',
      type: 'Part-time',
      salary: 1150,
      description: 'Part-time position at convenience store.',
      tags: ['Part-time', 'Student Friendly', 'Flexible Hours']
    },
    {
      id: 'mock-2',
      title: 'Café Staff',
      company: 'Starbucks Japan',
      location: 'Osaka',
      locationLabel: 'Osaka',
      category: 'hospitality',
      categoryLabel: 'Hospitality',
      type: 'Part-time',
      salary: 1200,
      description: 'Café service position.',
      tags: ['Part-time', 'Student Friendly']
    },
    {
      id: 'mock-3',
      title: 'English Conversation Teacher',
      company: 'ECC Language School',
      location: 'Kyoto',
      locationLabel: 'Kyoto',
      category: 'teaching',
      categoryLabel: 'Teaching',
      type: 'Part-time',
      salary: 2000,
      description: 'English teaching position.',
      tags: ['Part-time', 'English Required']
    },
    {
      id: 'mock-4',
      title: 'IT Support Assistant',
      company: 'Tech Solutions KK',
      location: 'Tokyo',
      locationLabel: 'Tokyo',
      category: 'it',
      categoryLabel: 'IT/Tech',
      type: 'Full-time',
      salary: 1500,
      description: 'IT support role.',
      tags: ['Full-time', 'Tech']
    }
  ];

  // Apply filters
  return mockJobs.filter(job => {
    const locationMatch = !location || location === 'all' || 
                         job.location.toLowerCase() === location.toLowerCase();
    const categoryMatch = !category || category === 'all' || job.category === category;
    const salaryMatch = job.salary >= minSalary;
    
    return locationMatch && categoryMatch && salaryMatch;
  });
};

export default { searchJobs };
