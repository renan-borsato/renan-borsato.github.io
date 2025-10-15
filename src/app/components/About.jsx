// src/app/components/About.jsx
"use client";
import Image from "next/image";
import myImageLoader from "../../lib/image.loader";

export default function About() {
  const timelineItems = [
    {
      title: "INDUSTRIAL AUTOMATION COURSE",
      description:
        "Completed a high school technical program focused on programming, robotics, and automation systems, sparking my interest in software development.",
    },
    {
      title: "SOFTWARE DEVELOPMENT INTERNSHIP",
      description:
        "Gained hands-on experience building and maintaining web applications, collaborating with a professional development team.",
    },
    {
      title: "SOFTWARE ENGINEERING DEGREE",
      description:
        "Deepened knowledge in algorithms, databases, and full stack web development through academic projects and coursework.",
    },
    {
      title: "FULL STACK DEVELOPER ROLE",
      description:
        "Currently building scalable, user-friendly applications, integrating frontend and backend technologies in real-world projects.",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-16">
      <h2 className="text-3xl mb-8 font-bold">ABOUT ME</h2>

      <div className="space-y-4 text-lg">
        <p>
          I’m a full stack developer with a passion for building scalable and
          intuitive web applications. I enjoy turning complex problems into
          elegant solutions and continuously learning the latest technologies to
          deliver high-quality results.
        </p>
        <p>
          Over the years, I’ve worked with a variety of frameworks and tools,
          from frontend libraries like React and Tailwind CSS to backend
          technologies like Node.js and databases. My focus is always on writing
          clean, maintainable code and creating seamless user experiences.
        </p>
        <p>
          When I’m not coding, I love exploring new tech trends, contributing to
          open-source projects, and improving my skills through side projects
          and challenges. My goal is to create software that makes a real impact
          and leaves users delighted.
        </p>
      </div>

      <h3 className="text-2xl mt-12 mb-6 font-semibold">My timeline:</h3>

      <div className="relative w-full mt-8">
        <div className="absolute top-2 left-0 right-0 h-0.5 bg-black dark:bg-white -translate-y-1/2"></div>

        <div className="relative flex justify-between">
          {timelineItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start w-1/5">
              <div className="w-4 h-4 bg-black dark:bg-white rounded-full mb-2 z-10" />
              <h4 className="font-semibold whitespace-pre-line">
                {item.title}
              </h4>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
