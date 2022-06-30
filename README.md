# Project Proposal

## Summary

"QuickPortfolio" is a platform for early-career computing professionals to easily create a portfolio that showcases their projects, their problem-solving process, and artifacts of work to potential employers. Our lab cohort will have the opportunity to explore or specialize in design, frontends, backends, databases, and infrastructure depending on their interests. Additionally, participants have ownership of the project, and are encouraged to work towards a project that meets their own needs.

## Scope

The project will be a success if:

1. A user can fill-in and submit fields that describe a personal computing project (i.e. project name, project time range, project summary, personal lessons learned, personal accomplishments, and links).

2. A user can share a link to their personal page, where visitors can view the information that was submitted.

The rest of the project scope will be determined by the interests of our lab cohort.

## Motivation

A strong online presence is valuable for a computing professional looking for a job to showcase their skills and possible work experience, creating an experience that sells the individual's skills and abilities.

Portfolios should feature a small number of curated projects to showcase accomplishments, "lessons learned," and artifacts of work. These projects could be from classes, personal projects, volunteering, internships, etc.

## Existing Solutions

LinkedIn is a useful networking tool, but it is not an effective portfolio. Frontend developers can build their own portfolios from scratch, but other computing professionals (backend, data science, etc.) maybe can not. Website builders exist, but they are very general and not always well-suited towards showcasing code, data, screenshots, etc.

This creates an opportunity: computing professionals are missing a quick tool to build a shareable portfolio of their work, without needing to code, without needing to navigate a drag-and-drop interface, and while following "best practices" for effective portfolio structure.

# Development Guide

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Software Versions

This project will work when using Node v16.13.0. This project has configurations for VS Code.

## Setup Local Environment

Create an `.env.local` file in the root of this project with the following keys:

```
AWS_ACCESS_KEY=
AWS_SECRET_ACCESS_KEY=
```

## Run Development Server

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Technical Architecture

## Clients

When writing our application logic, we don't want to worry about the exact implementation of the API calls - we just want to be able to call a function that acccomplishes our objective. In many cases, we will have corresponding API calls in the frontend and the backend. Over time, we may also migrate between backends (for example, from DynamoDB to a SQL database).

For these reasons, all APIs in this project are defined with an interface, a frontend client, and a backend client. For example:

- `IPortfolioClient` defines the interface for all clients for Portfolio APIs. All Portfolio API clients should be able to get, put, and list portfolios.
- `PortfolioApiClient` implements `IPortfolioClient` for frontend use. This client uses the browser `fetch` function to make calls to the QuickPortfolio API to get, put, and list portfolios.
- `PortfolioDbClient` implements `IPortfolioClient` for backend use. This client uses the AWS SDK to make calls to the DynamoDB API to get, put, and list portfolios.

## File Structure

- `enums/` - Enums are named types. All common named types are declared in this directory.
- `models/`
  - `clients/` - API client interfaces are declared in this directory.
  - `data/` - Data structures are declared in this directory.
- `pages/` - All pages and APIs are implemented in this directory.
  - `api/` - All APIs are implemented in this directory.
    - `portfolio/` - All Portfolio APIs are implemented in this directory.
  - `portfolio/` - All portfolio pages are implemented in this directory.
- `public/` - All static files are stored in this directory.
- `styles/` - All styles are implemented in this directory.
- `utils/` - All utility functions are implemented in this directory.
  - `api/` - All backend-specific utility functions are implemented in this directory
  - `clients/` - All clients are implemented in this directory.
