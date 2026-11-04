# Rblog

A full-stack Persian (RTL) blog with a public reading side and an author dashboard. Readers browse, search and filter posts by category, like and bookmark them and leave comments; signed-in users manage posts, categories, comments and users from a dashboard with stats and charts.

![Home Page](home-page-.png)
![Dashboard](dashboard-.png)
![Posts](posts-.png)



## Features

**Blog**
- Home page with featured, latest and popular posts; post list with search, category filter and pagination
- Post detail pages by slug with related posts, likes, bookmarks and comments with replies
- Server-side rendering for fast, SEO-friendly pages
- About page, custom loading, error and 404 pages

**Dashboard**
- Overview with stat cards, analytics chart, category donut, latest posts, drafts and recent activity (Recharts)
- Create, edit and delete posts with cover image upload
- Manage categories, review comments (approve / reject), list users
- Light and dark theme, mobile tab bar

**Auth**
- Sign up and sign in with email and password
- JWT access and refresh tokens in httpOnly cookies, route protection with Next.js middleware

## Tech stack

| Part | Stack |
|------|-------|
| Client (`client/`) | Next.js 15 (App Router), React 19, Tailwind CSS, TanStack Query, React Hook Form + Yup, Axios, Recharts, Heroicons |
| Server (`server/`) | Node.js, Express, MongoDB + Mongoose, Joi, JWT, bcrypt, Multer |

## Getting started

Requirements: Node.js 18+ and a running MongoDB.

```bash
git clone https://github.com/parisa-adli/Rblog.git
cd Rblog
npm install
npm install --prefix client
npm install --prefix server
cp server/.env.example server/.env   # set MONGODB_URI and the secret keys
cp client/.env.example client/.env   # NEXT_PUBLIC_BASE_URL=http://localhost:5000/api
npm run seed --prefix server         # sample users, posts, categories and comments
npm run dev                          # API on :5000, blog on :3000
```

## Project structure

```
client/src/
  app/(blogs)/      # home, blog list, post detail, about
  app/(auth)/       # sign in, sign up
  app/(dashboard)/  # profile dashboard: posts, categories, comments, users
  services/, hooks/, context/, ui/, utils/
  middleware.js     # protects dashboard routes
server/
  app/router/       # /user, /post, /category, /comment
  app/models/       # user, post, category, comment
  data/             # seed data
```
