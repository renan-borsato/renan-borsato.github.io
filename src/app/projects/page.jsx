"use client";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

export default function ProjectsPage() {
  const projects = [
    {
      logo: "/logo1.png",
      name: "Project 1",
      content: "A short description of Project 1 showcasing its main features and purpose.",
      link: "https://example.com",
    },
    {
      logo: "/logo2.png",
      name: "Project 2",
      content: "A short description of Project 2 highlighting its functionality and technologies used.",
      link: "https://example.com",
    },
    {
      logo: "/logo3.png",
      name: "Project 3",
      content: "A short description of Project 3 explaining its goals and impact.",
      link: "https://example.com",
    },
  ];

  return (
    <>
      <ThemeSwitcher />
      <main style={{ padding: "32px", maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "24px" }}>Projects</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  );
}
