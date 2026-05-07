# 🏨 The Wild Oasis — Hotel Management System

A full-featured hotel management dashboard built for internal staff use. The Wild Oasis enables hotel employees to manage cabins, track bookings, handle guest check-ins/check-outs, and monitor business performance through an intuitive, responsive interface.

🔗 **Live Demo:** [thewildoasisee.netlify.app](https://thewildoasisee.netlify.app/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

---

## Overview

The Wild Oasis is an internal-facing hotel management application. It provides hotel staff with the tools to manage all day-to-day operations — from monitoring a live dashboard with key statistics, to managing cabin listings, to processing guest check-ins and check-outs. The app is secured behind authentication, ensuring only authorized staff members have access.

---

## Features

- **Authentication** — Secure login for hotel staff; only registered users can access the system
- **Dashboard** — Overview of today's activity, recent bookings, occupancy stats, and revenue charts
- **Cabin Management** — Create, update, and delete cabin listings including photos and pricing
- **Booking Management** — View, filter, sort, and paginate all bookings; manage booking statuses
- **Check-in / Check-out** — Streamlined operations for guest arrivals and departures
- **Guest Management** — View guest records associated with bookings
- **Dark Mode** — Full light/dark theme toggle for comfortable use in any environment
- **Settings** — Configure application-wide settings such as breakfast pricing and minimum/maximum stay lengths
- **Filtering, Sorting & Pagination** — Applied across bookings and cabin views for easy data navigation

---

## Technologies Used

### Core

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 7** | Build tool and development server |
| **JavaScript (ES Modules)** | Primary language |

### Backend & Data

| Technology | Purpose |
|---|---|
| **Supabase** (`@supabase/supabase-js`) | Backend-as-a-Service — database, authentication, and file storage |

### State Management & Data Fetching

| Technology | Purpose |
|---|---|
| **TanStack React Query v4** | Server state management, caching, and background refetching |
| **React Hook Form** | Form state management and validation |

### Routing

| Technology | Purpose |
|---|---|
| **React Router DOM v7** | Client-side routing and navigation |

### Styling

| Technology | Purpose |
|---|---|
| **Styled Components v6** | CSS-in-JS component styling with theming support |

### UI & Utilities

| Technology | Purpose |
|---|---|
| **Recharts** | Dashboard data visualizations and charts |
| **React Icons** | Icon library |
| **React Hot Toast** | Toast notifications |
| **React Error Boundary** | Graceful error handling |
| **date-fns** | Date formatting and manipulation |

### Development

| Technology | Purpose |
|---|---|
| **ESLint** | Code linting |
| **@vitejs/plugin-react** | React Fast Refresh via Babel |

---

## File Structure

```
The-Wild-Oasis/
│
├── public/                         # Static assets served as-is
│
├── src/                            # Application source code
│   ├── context/                    # React context providers (e.g., DarkMode)
│   ├── data/                       # Seed data / static data files
│   ├── features/                   # Feature-based modules
│   │   ├── authentication/         # Login, user account, auth forms
│   │   ├── bookings/               # Booking list, detail, filtering
│   │   ├── cabins/                 # Cabin list, create/edit forms
│   │   ├── check-in-out/           # Check-in and check-out flows
│   │   ├── dashboard/              # Dashboard stats, charts, activity
│   │   ├── guests/                 # Guest records
│   │   └── settings/               # App-wide configuration settings
│   ├── hooks/                      # Custom reusable React hooks
│   ├── pages/                      # Route-level page components
│   │   ├── Account.jsx
│   │   ├── Bookings.jsx
│   │   ├── Cabins.jsx
│   │   ├── Checkin.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Settings.jsx
│   │   └── Users.jsx
│   ├── services/                   # Supabase API calls (apiBookings, apiCabins, etc.)
│   ├── styles/                     # Global styles and theme definitions
│   ├── ui/                         # Shared, reusable UI components
│   │   ├── AppLayout.jsx
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Pagination.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Table.jsx
│   │   └── ...
│   ├── utils/                      # Helper functions and utilities
│   ├── App.jsx                     # Root component with router setup
│   └── main.jsx                    # Application entry point
│
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
├── package.json                    # Dependencies and scripts
└── .gitignore
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A [Supabase](https://supabase.com) account and project

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Eslam-Elwey/The-Wild-Oasis.git
cd The-Wild-Oasis

# 2. Install dependencies
npm install

# 3. Configure environment variables (see below)

# 4. Start the development server
npm run dev
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Architecture Notes

The application follows a **feature-based folder structure**, where each business domain (bookings, cabins, dashboard, etc.) is self-contained with its own components, hooks, and API calls. Shared UI primitives live in the `ui/` directory and are composed throughout the features.

Data fetching and caching are handled entirely by **React Query**, keeping server state separate from UI state. All backend operations go through the `services/` layer, which wraps Supabase client calls.

---

*Built with React & Supabase. Deployed on Netlify.*
