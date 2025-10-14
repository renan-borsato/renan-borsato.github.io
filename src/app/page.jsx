"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import SkillsWidget from "./components/SkillsWidget/SkillsWidget";
import WorkWidget from "./components/WorkWidget/WorkWidget";
import UsesSection from "./components/UsesSection/UsesSection";
import SignupWidget from "./components/SignupWidget/SignupWidget";
import Footer from "./components/Footer/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navbarOptions = [
    { path: "#projects", label: "Projects" },
    { path: "#skills", label: "Skills" },
    { path: "#work", label: "Work" },
    { path: "#uses", label: "Uses" },
  ];

  const projects = [
    {
      logo: "/logo1.png",
      name: "Project 1",
      content: "Short description of Project 1",
      link: "https://example.com",
    },
    {
      logo: "/logo2.png",
      name: "Project 2",
      content: "Short description of Project 2",
      link: "https://example.com",
    },
  ];

  const skills = [
    { icon: "/js.png", name: "JavaScript", proficiency: 90 },
    { icon: "/react.png", name: "React", proficiency: 85 },
  ];

  const work = [
    {
      logo: "/company1.png",
      organization: "Company 1",
      jobTitle: "Frontend Developer",
      startYear: 2020,
      endYear: 2022,
    },
    {
      logo: "/company2.png",
      organization: "Company 2",
      jobTitle: "Fullstack Developer",
      startYear: 2022,
      endYear: null,
    },
  ];

  const usesItems = [
    {
      groupName: "Hardware",
      items: [
        { title: "Laptop", description: 'MacBook Pro 16"' },
        { title: "Monitor", description: "Dell 4K UltraSharp" },
      ],
    },
    {
      groupName: "Software",
      items: [
        { title: "Editor", description: "VS Code" },
        { title: "Terminal", description: "iTerm2" },
      ],
    },
  ];

  const footerLinks = [
    { title: "Privacy", url: "#" },
    { title: "GitHub", url: "https://github.com" },
  ];

  return (
    <>
      {mounted && <ThemeSwitcher />}
      <Navbar options={navbarOptions} />

      <main>
        <section id="projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>

        <section id="skills">
          <SkillsWidget
            title="Skills"
            content="These are my top skills"
            skills={skills}
          />
        </section>

        <section id="work">
          <WorkWidget
            title="Work Experience"
            content="Some of my professional experiences"
            experiences={work}
          />
        </section>

        <section id="uses">
          <UsesSection items={usesItems} />
        </section>

        <section id="signup">
          <SignupWidget
            title="Join My Newsletter"
            content="Get updates straight to your inbox."
          />
        </section>
      </main>

      <Footer links={footerLinks} />
    </>
  );
}
