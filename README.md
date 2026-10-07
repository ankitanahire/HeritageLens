# 🏛️ HeritageLens — Immersive Pune Heritage Explorer

> **Discover the timeless history, monumental architecture, and living culture of Pune through curated walking trails, interactive "Then & Now" historical sliders, and audio-guided chronicles.**

---

## 🌟 Overview

**HeritageLens** is an interactive web platform celebrating the cultural legacy of Pune, Maharashtra. From 8th-century Rashtrakuta rock-cut caves to majestic 18th-century Peshwa wadas, 19th-century freedom movement landmarks, and sacred patron shrines, HeritageLens connects travelers, historians, and locals with verified history, archival photography, and curated cultural experiences.

---

## ✨ Key Features

### 1. 🏛️ Comprehensive Heritage Catalog
* **9 Core Historical Monuments**: Detailed chronicles of Pune's defining landmarks (Shaniwar Wada, Vishrambaug Wada, Lal Mahal, Aga Khan Palace, Kasba Ganapati, Bhide Wada, Sinhagad Fort, Dagdusheth Halwai Ganapati, and Pataleshwar Cave Temple).
* **Authoritative Data Grounding**: Historical dates, architectural styles, builder attributions, key chronological milestones, entry fees, and protection status verified against records from the **Archaeological Survey of India (ASI)**, **Pune Municipal Corporation (PMC)**, and historical archives.
* **Smart Filtering & Search**: Instant filter by category (*Fort, Wada, Palace, Temple, Cave Temple*) and historical Peth wards (*Shaniwar Peth, Kasba Peth, Budhwar Peth, Sadashiv Peth, Yerwada, Shivajinagar, Sinhagad*).

### 2. ⏳ Interactive "Then & Now" Comparison Slider
* **Archival vs. Modern View**: Side-by-side interactive split slider comparing authentic 19th-century colonial photographs, British Library sketches, and pre-restoration structures with today’s ASI/PMC conserved monuments.
* **Historical Context**: Narrative explaining restoration milestones, architectural conservation (e.g., INTACH 2004 Vishrambaug Wada restoration, ASI 2025 Peshwa mural conservation), and historical transitions.

### 3. 🚶 Curated Heritage Walks & Trails
* **Peshwa Heritage Walk**: 3.2 km journey through the Maratha imperial core from Shaniwar Wada to Vishrambaug Wada.
* **Old Peths Walk**: 2.5 km cultural exploration of historic brassware alleys, Tulshibaug bazaar, and Mahatma Phule Mandai.
* **Wada Trail**: 3.0 km architectural immersion into timber courtyards, *Suru* cypress columns, and secret cisterns (Vishrambaug, Nana Wada, Bhide Wada).
* **Riverside Walk**: 2.0 km peaceful stroll along ancient Mutha river ghats, Omkareshwar temple, and Pataleshwar caves.
* **Pune Food Heritage Walk**: 2.2 km culinary journey tasting legendary Puneri Misal (since 1910), Chitale Bakarwadi, and Sujata Mastani.

### 4. 🗺️ Interactive Maps & Navigation
* Integrated **Google Maps Platform** with custom color-coded map markers for Monuments, Walks, and Cultural Workshops.
* Dynamic sidebar previews with distance calculations, coordinates, and direct navigation links.

### 5. 🎧 Audio Narratives & Chronicles
* Multi-chapter audio storytelling for every monument with time-coded historical narratives covering founding legends, battles, architectural genius, and modern conservation.

### 6. 🎨 Living Cultural Experiences
* Bookable heritage workshops and cultural sessions including **Paithani & Puneri Pagadi Handloom Weaving**, **Courtyard Baithak Classical Music Evenings**, **Traditional Maharashtrian Culinary Banquets**, and **Heritage Photography Masterclasses**.

### 7. 🎒 Personalized Trip Planner
* Save favorite monuments and experiences to create a custom day-by-day travel itinerary with estimated visit durations.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Routing** | [React Router DOM](https://reactrouter.com/) |
| **Maps & Geospatial** | [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling** | Custom Vanilla CSS (Heritage Dark Luxury Palette, Glassmorphism, CSS Custom Properties) |
| **Linting & Code Quality** | [Oxlint](https://oxc.rs/) |

---

## 📁 Project Structure

```
HeritageLens/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── monuments/        # Hero, gallery, and "Then & Now" archival images
│       ├── walks/            # Trail preview and route photography
│       └── experiences/      # Workshop and culinary feast photography
├── src/
│   ├── assets/               # Static assets & icons
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx        # Navigation header with search & saved counter
│   │   ├── Footer.tsx        # Footer with links and copyright
│   │   ├── HeritageCard.tsx  # Monument preview card
│   │   ├── WalkCard.tsx      # Walk preview card
│   │   ├── ExperienceCard.tsx# Cultural experience card
│   │   ├── ThenNowSlider.tsx # Interactive comparison slider
│   │   ├── AudioPlayer.tsx   # Multi-chapter narration player
│   │   └── SearchModal.tsx   # Global spotlight search dialog
│   ├── context/
│   │   ├── SavedContext.tsx  # Saved favorites & trip planner state
│   │   └── SearchContext.tsx # Global search state management
│   ├── data/
│   │   ├── monuments.ts      # Ground-truth monument records & archival pairs
│   │   ├── walks.ts          # Curated walking routes and step stops
│   │   └── experiences.ts    # Cultural events, pricing, and booking slots
│   ├── pages/
│   │   ├── HomePage.tsx      # Landing page with hero, featured walks, & highlights
│   │   ├── ExplorePage.tsx   # Filterable monument directory & search
│   │   ├── MonumentDetailPage.tsx # In-depth history, audio, gallery, & Then/Now
│   │   ├── WalksPage.tsx     # Walking trails catalog
│   │   ├── WalkDetailPage.tsx# Step-by-step trail guide with route map
│   │   ├── ExperiencesPage.tsx # Cultural workshops & activities
│   │   ├── ExperienceDetailPage.tsx # Event details & booking interface
│   │   ├── MapPage.tsx       # Fullscreen Google Maps explorer
│   │   └── MyTripPage.tsx    # Saved items & personalized itinerary planner
│   ├── types/
│   │   └── index.ts          # Comprehensive TypeScript interfaces & types
│   ├── App.tsx               # Root component with routing
│   ├── index.css             # Global design tokens & styling system
│   └── main.tsx              # Application entry point
├── .env.example              # Environment variables template
├── package.json              # Dependencies & npm scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ankitanahire/HeritageLens.git
   cd HeritageLens
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_MAP_API_KEY=your_google_maps_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 🏛️ Featured Monuments

| Monument | Period | Significance |
|---|---|---|
| **Shaniwar Wada** | 1730–1732 CE | Imperial headquarters of the Peshwas; famed Delhi Gate (*Dilli Darwaza*). |
| **Vishrambaug Wada** | 1807–1811 CE | Peshwa Baji Rao II's luxury mansion with carved *Suru* cypress teakwood pillars. |
| **Lal Mahal** | 1630 CE | Childhood residence of Chhatrapati Shivaji Maharaj; site of the 1663 Shaista Khan raid. |
| **Aga Khan Palace** | 1892 CE | 1942 Quit India internment site of Mahatma Gandhi; Kasturba Gandhi memorial (*Samadhi*). |
| **Kasba Ganapati** | 1630 CE | Sacred *Gramdaivat* (patron deity) of Pune & *Manacha Pahila Ganpati*. |
| **Bhide Wada** | 1848 CE | Cradle of women's education; India's first girls' school founded by Savitribai & Jyotirao Phule. |
| **Sinhagad Fort** | Ancient / 1670 CE | Legendary Sahyadri mountain fort; site of Subedar Tanaji Malusare's heroic victory. |
| **Dagdusheth Ganapati** | 1893 CE | Gilded marble temple; catalyst of the public *Sarvajanik Ganeshotsav* with Lokmanya Tilak. |
| **Pataleshwar Caves** | 8th Century CE | Monolithic Rashtrakuta rock-cut Shiva temple with circular *Nandi Mandapa*. |

---

## 📜 License

This project is created for educational and cultural heritage preservation purposes. All historical texts and archival images are credited to their respective public archives, the Archaeological Survey of India (ASI), and the Pune Municipal Corporation (PMC).
