# VendPal

## Overview

VendPal is a small-scale application built with modern web technologies, focusing on efficiency and collaboration. The project leverages component-driven design principles and lightweight state management to create a seamless user experience.

## Tech Stack

### UI

- **Tailwind CSS**: Utilized for utility-first styling
- **Shadcn**: Implemented for component-driven design, enhancing collaboration speed and consistency

### Frontend State Management

- **Zustand**: Chosen for its simplicity and efficiency in managing state for smaller applications, eliminating the need for more complex solutions like Redux

### API Consumption

- **React Query**: Implemented for optimized client-side data fetching, caching, and state management

### Backend (Simulation)

- **Vercel Serverless Functions**: Used to create simulated API endpoints, providing a backend-like experience without the need for a dedicated server

## Getting Started

### Prerequisites

- Node.js (latest stable version recommended)
- npm package manager

### Installation

1. Clone the repository:

   ```bash
   # Using SSH
   git clone git@github.com:MARKOTHEDEV/VendPal.git

   # Using HTTPS
   git clone https://github.com/MARKOTHEDEV/VendPal.git
   ```

2. Navigate to the project directory:

   ```bash
   cd VendPal
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local development URL displayed in your terminal (typically `http://localhost:3000`)

## Project Structure

```
VendPal/
├── api/              # Vercel serverless functions
├── public/           # Static assets
├── src/              # where my application code goes
  ├── api/            # where my application store endpoints
  ├── components/       # Shadcn and custom UI components
  ├── lib/              # Utilities and shared functions
  ├── store/            # Zustand store configurations
```

## NOTE

Vercel serveless function is throwing error locally because of CORS error

## Contact

Project Link: [https://github.com/MARKOTHEDEV/VendPal](https://github.com/MARKOTHEDEV/VendPal)

#

Vercel Link: [https://mitochron.vercel.app/)
