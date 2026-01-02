# KCGI Jobs Japan 🇯🇵

A modern job search website for finding opportunities in Japan, built for KCGI students and international workers.

## ✨ Features

- 🔍 **Real Job Search** - Integrated with Adzuna API for live job listings
- 🗾 **Japan-Focused** - Search jobs in Tokyo, Kyoto, Osaka, and remote positions
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎯 **Smart Filters** - Filter by location, category, and salary
- 🚀 **Fast & Modern** - Built with React + Vite
- 💼 **Multiple Categories** - IT, Teaching, Hospitality, Retail, Office jobs

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm installed
- Adzuna API keys (free - see setup below)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd kcgi-jobs-japan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API keys** (Optional but recommended)
   - Copy `.env.example` to `.env`
   - Get free API keys from [Adzuna](https://developer.adzuna.com/)
   - Add your keys to `.env`:
     ```
     VITE_ADZUNA_APP_ID=your_app_id
     VITE_ADZUNA_APP_KEY=your_app_key
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Visit: http://localhost:5173

## 📖 API Setup Guide

For detailed instructions on setting up the Adzuna API integration, see [API_SETUP.md](./API_SETUP.md)

### Quick Setup Steps:

1. Sign up at https://developer.adzuna.com/
2. Get your App ID and API Key
3. Add them to your `.env` file
4. Restart the dev server
5. Start searching real jobs!

**Note:** The app works without API keys using sample data, but you won't see real job listings.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **API:** Adzuna Job Search API
- **Deployment Ready:** Optimized for production builds

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 How It Works

### Without API Keys
- Shows sample job data (4 jobs)
- Displays warning message
- Perfect for testing UI/UX

### With API Keys
- Fetches real jobs from Adzuna
- Up to 5,000 searches/month (free tier)
- Clickable job links to apply
- Real-time job market data

## 📂 Project Structure

```
kcgi-jobs-japan/
├── src/
│   ├── components/        # React components
│   │   ├── JobSearch.jsx  # Job search interface
│   │   ├── Navbar.jsx     # Navigation
│   │   └── ...
│   ├── services/          # API integration
│   │   └── jobApi.js      # Adzuna API service
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                # Static assets
├── .env                   # API credentials (not in git)
├── .env.example           # Template for API credentials
├── API_SETUP.md           # Detailed API setup guide
└── README.md              # This file
```

## 🔒 Security

- `.env` file is gitignored (never commit API keys!)
- All API keys are environment variables
- No sensitive data in client-side code
- Fallback to sample data when keys missing

## 🎨 Customization

### Adding More Job Categories

Edit `src/services/jobApi.js`:

```javascript
const categoryMapping = {
  it: 'IT software development programming',
  teaching: 'teacher tutor education teaching',
  yourCategory: 'your search keywords here'
};
```

### Changing Locations

Update both `JobSearch.jsx` and `jobApi.js`:

```javascript
const locationMapping = {
  kyoto: 'Kyoto',
  yourCity: 'Your City Name'
};
```

## 🌟 Features Roadmap

- [ ] Pagination for search results
- [ ] Save favorite jobs
- [ ] Job detail pages
- [ ] Email job alerts
- [ ] Resume upload
- [ ] Application tracking
- [ ] Salary comparison charts
- [ ] Company reviews

## 🐛 Troubleshooting

### "API credentials not configured" warning

**Solution:** Add your Adzuna API keys to `.env` file and restart the server.

### No search results

**Possible causes:**
- Invalid API keys
- Rate limit exceeded (5,000/month)
- Network issues
- Overly restrictive filters

**Solution:** Check browser console (F12) for errors and verify your API keys.

### Vite environment variables not working

**Solution:** Ensure your env variables start with `VITE_` prefix and restart the dev server.

## 📝 License

This project is for educational purposes. Job data is provided by Adzuna API.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions:
1. Check [API_SETUP.md](./API_SETUP.md)
2. Review [Adzuna documentation](https://developer.adzuna.com/docs/)
3. Open an issue in the repository

## 🙏 Acknowledgments

- **Adzuna** - For providing the job search API
- **KCGI** - Kyoto College of Graduate Studies for Information Technology
- **React Team** - For the amazing framework
- **Vite Team** - For the blazing fast build tool

---

**Made with ❤️ for KCGI students and job seekers in Japan**
