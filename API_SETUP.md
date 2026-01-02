# Real Job Search API Setup Guide

This guide will help you integrate real job search APIs into your KCGI Jobs Japan website.

## Current Integration: Adzuna API

The website now uses **Adzuna Job Search API** to fetch real job listings from Japan.

### Why Adzuna?
- ✅ **Free tier**: 5,000 API calls per month
- ✅ **No approval needed**: Instant access
- ✅ **Japan coverage**: Supports Japanese job market
- ✅ **Good documentation**: Easy to use
- ✅ **Real-time data**: Up-to-date job listings

---

## Setup Instructions

### Step 1: Get Your API Keys

1. **Visit Adzuna Developer Portal**
   - Go to: https://developer.adzuna.com/
   
2. **Create an Account**
   - Click "Sign Up" or "Register"
   - Fill in your details (name, email, etc.)
   - Verify your email address

3. **Get Your API Credentials**
   - After logging in, go to your dashboard
   - You'll see your **App ID** and **API Key**
   - Copy both values (you'll need them in Step 2)

### Step 2: Configure Your Project

1. **Open the `.env` file** in the project root directory

2. **Add your credentials**:
   ```
   VITE_ADZUNA_APP_ID=your_actual_app_id
   VITE_ADZUNA_APP_KEY=your_actual_api_key
   ```

3. **Save the file**

### Step 3: Test Your Integration

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** to the local server (usually http://localhost:5173)

3. **Navigate to the "Search Jobs" section**

4. **Try searching**:
   - Select a location (Tokyo, Kyoto, Osaka, etc.)
   - Choose a job category
   - Click "Search Jobs"
   - You should see real job listings!

### Step 4: Verify It's Working

✅ **With API keys configured:**
- You'll see real job listings from Adzuna
- Job titles will be clickable links to apply
- Results will vary based on your search filters
- No warning message about API keys

❌ **Without API keys (fallback mode):**
- You'll see a warning: "⚠️ API keys not configured"
- You'll see 4 sample jobs only
- Jobs won't have clickable links

---

## Fallback Behavior

**Don't worry if you haven't set up API keys yet!** The website will:
- Still work with sample data
- Show a friendly warning message
- Allow you to test the search functionality

This is perfect for:
- Testing the UI without API keys
- Development/preview environments
- Demos and presentations

---

## Alternative Job Search APIs

If you want to use different APIs, here are other options:

### 1. **Indeed API**
- **Website**: https://www.indeed.com/publisher
- **Pros**: Largest job board, great coverage
- **Cons**: Requires partner approval, more restrictive
- **Cost**: Free for approved partners

### 2. **Jooble API**
- **Website**: https://jooble.org/api/about
- **Pros**: Global coverage, simple integration
- **Cons**: Requires approval
- **Cost**: Free tier available

### 3. **LinkedIn Jobs API**
- **Website**: https://developer.linkedin.com/
- **Pros**: High-quality jobs, professional network
- **Cons**: Complex approval process, strict usage limits
- **Cost**: Varies by tier

### 4. **Japan-Specific Services**
You could also integrate directly with Japanese job sites:
- **Recruit API** (if available)
- **Doda** (requires business partnership)
- **GaijinPot** (for foreign workers in Japan)

---

## API Usage Limits

### Adzuna Free Tier
- **5,000 calls per month**
- **~166 calls per day**
- **Perfect for**: Small projects, testing, personal websites

### Tips to Stay Within Limits
1. **Cache results** - Store search results temporarily
2. **Lazy loading** - Only search when user clicks "Search"
3. **Debounce** - Add delays to prevent rapid repeated searches
4. **Monitor usage** - Check your Adzuna dashboard regularly

---

## Troubleshooting

### Issue: "API credentials not configured" warning appears

**Solution**: 
1. Check that `.env` file exists in project root
2. Verify you've added the correct API keys
3. Restart the dev server after adding keys
4. Make sure keys start with `VITE_` prefix

### Issue: No search results returned

**Possible causes**:
1. **Invalid API keys** - Double-check your credentials
2. **Rate limit exceeded** - You've used your monthly quota
3. **Network error** - Check your internet connection
4. **Filters too restrictive** - Try broader search criteria

**Solutions**:
- Check browser console (F12) for error messages
- Verify keys in Adzuna dashboard
- Try searching without filters first
- Wait if you've hit rate limits (resets monthly)

### Issue: Jobs appear in wrong language

**Note**: Adzuna returns jobs as posted by employers. For Japan:
- Some jobs may be in English (for international positions)
- Some jobs may be in Japanese
- This is normal and reflects the actual job market

---

## How the Integration Works

### Architecture

```
User Interface (JobSearch.jsx)
          ↓
    searchJobs() function
          ↓
   API Service (jobApi.js)
          ↓
    Adzuna API Call
          ↓
   Data Transformation
          ↓
    Display Results
```

### Data Flow

1. **User inputs search criteria** (location, category, salary)
2. **Frontend calls** `searchJobs()` from `jobApi.js`
3. **API service builds** the Adzuna API request
4. **Adzuna returns** real job data (JSON)
5. **Service transforms** data to match our format
6. **Component displays** the results to user

### Key Files

- `src/services/jobApi.js` - API integration logic
- `src/components/JobSearch.jsx` - Search interface
- `.env` - API credentials (not committed to git)
- `.env.example` - Template for API credentials

---

## Security Best Practices

✅ **DO:**
- Keep `.env` file private (it's in `.gitignore`)
- Never commit API keys to version control
- Use environment variables for all secrets
- Regenerate keys if accidentally exposed

❌ **DON'T:**
- Share your `.env` file publicly
- Post API keys in screenshots or documentation
- Commit secrets to GitHub/GitLab
- Use production keys in public demos

---

## Next Steps

### Enhance Your Job Search

1. **Add more filters**:
   - Job type (full-time, part-time, contract)
   - Experience level
   - Company size
   - Date posted

2. **Improve UX**:
   - Add pagination for results
   - Implement search result caching
   - Add "Save job" functionality
   - Create job detail pages

3. **Additional features**:
   - Email job alerts
   - Resume upload
   - Application tracking
   - Salary comparisons

---

## Support & Resources

- **Adzuna Documentation**: https://developer.adzuna.com/docs/
- **API Status**: Check Adzuna status page for outages
- **Community**: Adzuna developer forums
- **Project Issues**: Report bugs via your project repository

---

## Questions?

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the Adzuna API documentation
3. Check browser console for error messages
4. Verify your API credentials in the dashboard

Happy job hunting! 🎉
