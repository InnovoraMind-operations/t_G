# Techryon Global

Techryon Global bridges the gap between complex IT infrastructure and seamless business execution. This repository contains the source code for the official Techryon Global website, built with React and Vite.

## Overview

The website features a modern, responsive design that highlights the core offerings of Techryon Global:
- **IT Consultancy**: Enterprise-grade software development, artificial intelligence implementation, and secure architectures.
- **Technical Events**: World-class technological gatherings and conferences (e.g., Infratech) bridging the industry.

## Key Features & Recent Updates

- **Complete Redesign**: Overhauled the UI with a modern tech-focused aesthetic using custom CSS and Lucide-React icons.
- **Dynamic Content**: Transitioned to data-driven content management for Services and Events (`src/data/servicesData.js`, `src/data/eventsData.js`).
- **New Pages & Routing**:
  - `Home`, `About`, `Contact`
  - `Services` & `Service Detail`
  - `Events` & `Event Detail` (replacing the former Conferences page)
  - `Advisory Board`
- **Deployment**: Added Vercel configuration (`vercel.json`) for seamless routing and deployment.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide-React
- **Styling**: Vanilla CSS with modern glassmorphism and glow effects

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
