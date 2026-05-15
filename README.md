# Music Academy - Next.js

This is My First [Next.js](https://nextjs.org) application which I built purely with the intent of exploring and learning it, as a Modern Full-Stack Web Developer, who's already skilled in MERN Tech Stack.

I've used all the recommended libraries by Next.js,which are: [TypeScript](https://www.typescriptlang.org/), [React.js](https://react.dev/), [Tailwind-CSS](https://tailwindcss.com/) and more.

Thanks a ton to my mentor [Sr. Hitesh Choudhary](https://github.com/hiteshchoudhary) for teaching me this amazing Framework (that too Full-Stack 😌) in such a fun, efficient and commendable way👏, that too in free🫡. I just don't have any words for Him, just a 💖. Make sure to check out [His YT Course](https://youtube.com/playlist?list=PLu71SKxNbfoDWGIwaEwhTUR40AbH8qsTo&si=-dfgt64N7UoY0gKW) if you're beginner in Next.js, want to learn it from scratch and become comfortable in it. I've also learnt from the same playlist :)

## Learnings:
1. In `/src/app/` folder which folder we create with `pages.tsx` file, then the name of folder becomes the route/path name using which we can access the page. This is how easily the routing is performed in Next.js. For eg: if inside `app/` you've created `admin/` folder with `pages.tsx` file, then hitting the URL `http://localhost:3000/admin` will be rendering the `pages.tsx` file in the client-side.
2. Since Next.js is a full-stack framework, so to inform it whether which code/component is for client-side (frontend) and server-side (backend), we use "use client" string at the top of every "page component" before the import statements (convention or industry standard). For eg: check out the files or components like: [FeaturedCourses.tsx](https://github.com/VinayNoogler000/Music-Academy-Next.js/blob/3ffb6fed26dfca04bfe217f42dd78d78c17dd94f/src/components/FeaturedCourses.tsx) and [HeroSection.tsx](https://github.com/VinayNoogler000/Music-Academy-Next.js/blob/3ffb6fed26dfca04bfe217f42dd78d78c17dd94f/src/components/HeroSection.tsx)
3. Instead of referring to folders/files when importing data from them, with dots (.), slashes (/ or \) or tilde (~), we can use `@` to refer to the `app/`folder inside `src/`, and then we can mention the paths of files relative to it, just like how I've used in [app/pages.tsx](https://github.com/VinayNoogler000/Music-Academy-Next.js/blob/3ffb6fed26dfca04bfe217f42dd78d78c17dd94f/src/app/page.tsx)file.
4. Learnt to understand, use/integrate, and debug production-ready UI components of [Aceternity UI Library - FOSS](https://ui.aceternity.com/) in Next.js apps like [Music Academy](https://github.com/VinayNoogler000/Music-Academy-Next.js). Make sure to check it out, if you're interested.
5. Each folders in `src/app/` will be having at least `pages.tsx` file for routing purposes, but it may also have `layout.tsx` file which consists of `RootLayout()` component that is used to define the layout of the page, whereas `pages.tsx` consists of the content that will be inserted in to the `layout.tsx`. For instance: check out [layout.tsx](https://github.com/VinayNoogler000/Music-Academy-Next.js/blob/3ffb6fed26dfca04bfe217f42dd78d78c17dd94f/src/app/layout.tsx) file in the root of `app/` folder. Whatever is defined in the `app/layout.tsx` file, it will be rendered in each and every pages defined inside the `app/` folder (should be following the folder structure mentioned in first point).
6. In Next.js framework, there aren't any individual HTML file (by default) in the root of the project directory, as the basic HTML (`<html>, <body>`) is defined in the `app/layout.tsx`, including the additionals like `metadata` and fonts which Next.js provides on its own.

## Steps to Run it Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn about Next.js from Official Sources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!