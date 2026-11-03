# Blog Management Application

This project is a **Blog Management Application** built using **Next.js** and **React.js**, designed to provide a seamless experience for managing blogs, comments, categories, and users. The application follows **best practices** and **modern patterns** in React and Next.js development.

## Features

- **Authentication**: User authentication using custom hooks and context API.
- **Dashboard**: A fully functional admin dashboard for managing posts, comments, categories, and users.
- **Dynamic Routing**: Utilizes Next.js dynamic routing for pages like blog details, categories, and user profiles.
- **Server-Side Rendering (SSR)**: Implements SSR for better SEO and performance.
- **API Integration**: Fetches data from a backend API using `fetch` and `react-query`.
- **Responsive Design**: Fully responsive UI built with **Tailwind CSS**.
- **State Management**: Uses React Context API and custom hooks for managing global state.
- **Form Validation**: Implements form validation using `react-hook-form` and `yup`.

## Tech Stack

- **Next.js**: Framework for server-side rendering and static site generation.
- **React.js**: Frontend library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Query**: For data fetching and caching.
- **React Hook Form**: For form handling and validation.
- **Yup**: Schema validation for forms.
- **Heroicons**: Icon library for modern UI components.
- **React Hot Toast**: For notifications and alerts.

## Code Structure and Patterns

- **Component-Based Architecture**: The project is divided into reusable and modular components.
- **Custom Hooks**: Encapsulates logic for API calls and state management.
- **Context API**: Used for managing authentication and global state.
- **Dynamic Imports**: Optimizes performance by lazy-loading components where necessary.
- **Error Handling**: Centralized error handling for API calls and UI components.
- **Pagination**: Implements efficient pagination for lists like posts and comments.
- **Localization**: Supports RTL (Right-to-Left) layout for Persian language.

## Development Workflow

1. **Backend API Integration**: The development process started with creating and testing server-side API requests to ensure proper communication with the backend.
2. **Custom Hooks**: After API integration, reusable custom hooks were developed to encapsulate logic for data fetching, state management, and API interactions. These hooks are designed to be used across the project for consistency and maintainability.
3. **Reusable Components**: Modular and reusable UI components were created to ensure a consistent design and reduce code duplication. These components are used throughout the project to build pages and features efficiently.
4. **Global State Management**: The Context API was implemented to manage global states like authentication and user data, ensuring seamless access across the application.
5. **Responsive Design**: Tailwind CSS was used to create a fully responsive and modern UI, ensuring compatibility across devices.

## Folder Structure

- `src/app`: Contains Next.js pages and layouts.
- `src/ui`: Reusable UI components like buttons, modals, and tables.
- `src/services`: API service functions for interacting with the backend.
- `src/hooks`: Custom hooks for data fetching and state management.
- `src/styles`: Global styles and Tailwind CSS configurations.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-management-app.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
