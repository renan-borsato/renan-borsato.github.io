"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "PORTFOLIO WEBSITE",
      description: "Personal website showcasing projects and skills.",
      details:
        "Built with Next.js and Tailwind CSS, responsive and SEO-friendly.",
      tech: "Next.js, Tailwind CSS, Vercel",
      link: "https://github.com/renan-borsato/renan-borsato.github.io",
      image: "/item1.png",
    },
    {
      title: "E-COMMERCE PLATFORM",
      description:
        "Online store for electronics with shopping cart and checkout.",
      details:
        "Implemented product listing, cart management, and payment integration.",
      tech: "React, Node.js, Express, MongoDB",
      link: "https://preview.redd.it/fjikpkv40ed71.jpg?auto=webp&s=d76a61e33cb21cd2e9f8d2b57af1ced60af39798",
      image: "/item2.png",
    },
    {
      title: "TASK MANAGER APP",
      description:
        "Manage and track daily tasks with deadlines and priorities.",
      details: "Created CRUD functionality, filtering, and notifications.",
      tech: "React, Firebase, Tailwind CSS",
      link: "https://preview.redd.it/fjikpkv40ed71.jpg?auto=webp&s=d76a61e33cb21cd2e9f8d2b57af1ced60af39798",
      image: "/item3.png",
    },
    {
      title: "CHAT APPLICATION",
      description: "Real-time chat app for users to communicate instantly.",
      details:
        "Implemented WebSocket-based messaging with rooms and private chats.",
      tech: "React, Node.js, Socket.io, MongoDB",
      link: "https://preview.redd.it/fjikpkv40ed71.jpg?auto=webp&s=d76a61e33cb21cd2e9f8d2b57af1ced60af39798",
      image: "/item4.png",
    },
    {
      title: "BLOG PLATFORM",
      description: "A platform for publishing and managing blog posts.",
      details: "Supports rich text editor, comments, and user authentication.",
      tech: "Next.js, Prisma, SQL, Tailwind CSS",
      link: "https://preview.redd.it/fjikpkv40ed71.jpg?auto=webp&s=d76a61e33cb21cd2e9f8d2b57af1ced60af39798",
      image: "/item5.png",
    },
    {
      title: "WEATHER DASHBOARD",
      description:
        "A web app that shows real-time weather data for any location.",
      details: "Fetched public data, implemented search and dynamic updates.",
      tech: "React, Tailwind CSS, Axios",
      link: "https://preview.redd.it/fjikpkv40ed71.jpg?auto=webp&s=d76a61e33cb21cd2e9f8d2b57af1ced60af39798",
      image: "/item6.png",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <h2 className="text-3xl mb-8">MY PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-6"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={160}
              className="mb-4 rounded-lg object-cover w-[400px] h-[160px]"
            />
            <h3 className="font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            <p className="text-sm mb-2">{project.details}</p>
            <p className="text-sm mb-4">{project.tech}</p>
            <a
              href={project.link}
              className="flex items-center gap-4 text-blue-600 dark:text-blue-400"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="dark:invert"
              />
              GO TO REPOSITORY
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
