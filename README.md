# MacroFit Tracker

A React SPA for tracking daily macronutrients (protein, fat, carbs), calories, and water intake.
Calorie goals are calculated using the **Mifflin-St Jeor** formula.

## Screenshots

> Add screenshots here after deployment

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19 | UI library |
| React Router DOM | ^7 | Client-side routing |
| Redux Toolkit | ^2 | Global state management |
| React Redux | ^9 | React-Redux binding |
| MockAPI.io | — | REST API mock backend |

## Features

- Authentication simulation with protected routes
- Meal diary with CRUD operations via REST API
- Macro tracking with real-time progress bars
- Water intake tracker with localStorage persistence
- Dark / Light theme with Redux
- Responsive design for mobile and desktop
- Loading, error, and empty states for all async operations

## Project Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Route-level page components
├── hooks/        # Custom React hooks
├── services/     # API service layer
├── redux/        # Redux slices and store
├── utils/        # Pure helper functions
└── context/      # React Context (Auth)
```

## Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/macrofit-tracker.git
cd macrofit-tracker
npm install
```

### Running locally

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

### Demo credentials

```
Email:    user@macrofit.com
Password: 123456
```

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

## Live Demo

> Add Vercel/Netlify URL here after deployment
