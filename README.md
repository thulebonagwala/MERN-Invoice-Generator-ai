# MERN-Invoice-Generator-AI

*A full-stack invoice generation system built with the MERN stack and
enhanced with AI-powered automation.* 

**Website:** https://thulebonagwala-invoiceapp.netlify.app 

**Demo Login:**  
email: thule_10@hotmail.com  
Password: Test@123


## Table of Contents

-   [Project Overview](#project-overview)
-   [Key Features](#key-features)
-   [Tech Stack](#tech-stack)
-   [Architecture & Folder Structure](#architecture--folder-structure)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Environment Variables](#environment-variables)
    -   [Running Locally](#running-locally)
-   [Usage](#usage)
-   [AI / Automation Highlights](#ai--automation-highlights)
-   [Deployment](#deployment)
-   [Contributing](#contributing)
-   [License & Acknowledgements](#license--acknowledgements)
-   [Contact](#contact)

------------------------------------------------------------------------

## Project Overview

This project is a **web application** for creating, managing and
generating invoices, built using the MERN stack (MongoDB, Express.js,
React/Vite, Node.js) and enhanced with AI-driven automation.\
It supports user authentication, invoice management, PDF generation,
recurring billing logic, and smart auto-suggestions powered by AI.

The goal is to streamline invoicing for freelancers, small businesses,
and agencies by providing a fast, intelligent, and user-friendly system.

------------------------------------------------------------------------

## Key Features

-   **User Authentication** (register/login, JWT-protected routes)\
-   **Invoice CRUD** -- create, update, view, delete invoices\
-   **Client & Item Management**\
-   **Professional PDF Invoice Generation**\
-   **Email Sending Support** (optional via SMTP)\
-   **Dashboard & Analytics** (paid/unpaid, summaries, latest invoices)\
-   **AI Assistance** (smart auto-fill, item recommendations, invoice
    insights)\
-   **Responsive UI** for desktop & mobile\
-   **Full MERN Integration**

------------------------------------------------------------------------

## Tech Stack

### **Frontend**

-   React (Vite)
-   Redux 
-   Axios for API requests
-   Tailwind 

### **Backend**

-   Node.js + Express.js
-   MongoDB + Mongoose
-   JWT Authentication
-   PDF Generation (HTML-to-PDF libraries)
-   Nodemailer (optional)

### **AI / Automation**

-   Gemini AI API 
-   Smart invoice field predictions
-   Intelligent item suggestions
-   Automated recurring invoice logic

------------------------------------------------------------------------

## Architecture & Folder Structure

    /backend/            
      /controllers/      
      /models/           
      /routes/           
      /utils/            
      .env               
      server.js

    /frontend/           
      /src/
        /components/
        /pages/
        /services/
        /context/
      .env               

    .gitignore           
    README.md            

------------------------------------------------------------------------

## Getting Started

### Prerequisites

-   Node.js 16+\
-   npm or yarn\
-   MongoDB (local or Atlas)\
-   SMTP credentials (optional)\
-   AI API key (optional)

------------------------------------------------------------------------

## Installation

Clone the repository:

``` bash
git clone https://github.com/thulebonagwala/MERN-Invoice-Generator-AI.git
cd MERN-Invoice-Generator-AI
```

### Install backend dependencies:

``` bash
cd backend
npm install
```

### Install frontend dependencies:

``` bash
cd ../frontend
npm install
```

------------------------------------------------------------------------

## Environment Variables

### **Backend `.env`**

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    PORT=5000
    GEMINI_API_KEY=your_ai_key

### **Frontend `.env`**

    VITE_API_BASE_URL=http://localhost:5000/api

------------------------------------------------------------------------

## Running Locally

### Terminal 1 -- Backend

``` bash
cd backend
npm run dev
```

### Terminal 2 -- Frontend

``` bash
cd frontend
npm run dev
```

Open your browser at:\
**http://localhost:3000**

------------------------------------------------------------------------

## Usage

-   Create an account or log in
-   Add business details and branding
-   Register clients and items
-   Generate invoices with line items, discounts, tax options
-   Export  download invoice PDFs
-   Email invoices to clients
-   Track payment statuses
-   Use AI suggestions for faster invoice creation

------------------------------------------------------------------------

## AI / Automation Highlights

-   **Smart defaults**: suggested invoice numbers, dates, totals
-   **Item prediction**: based on previous invoices
-   **Recurring invoice logic**
-   **Automated PDF generation**
-   **AI-assisted descriptions** and service titles

------------------------------------------------------------------------

## Deployment

-   Build frontend:

    ``` bash
    npm run build
    ```

-   Deploy backend to services like Render, Railway, Heroku, AWS, or
    DigitalOcean\

-   Deploy frontend to Netlify, Vercel, or serve via Express\

-   Use MongoDB Atlas for production database\

-   Ensure HTTPS and proper CORS setup

------------------------------------------------------------------------

## Contributing

1.  Fork the repo\

2.  Create a new branch:

    ``` bash
    git checkout -b feature-yourFeature
    ```

3.  Commit changes with clear messages\

4.  Push and submit a PR

Pull requests and feature suggestions are welcome!

------------------------------------------------------------------------

## License & Acknowledgements

This project is licensed under the **MIT License.**  
Thanks to all the open-source tools used in building this application.

------------------------------------------------------------------------

## Contact

Developed by **Thulebona Gwala**  
GitHub: https://github.com/thulebonagwala  
Project Repository:
https://github.com/thulebonagwala/MERN-Invoice-Generator-AI
