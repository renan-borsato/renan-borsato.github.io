export default function Skills() {
  const skills = {
    FRONTEND: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Angular",
    ],
    BACKEND: ["Node.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"],
    TOOLS: ["Git", "Docker", "VS Code", "Postman", "Figma", "Jira"],
    "SOFT SKILLS": [
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Adaptability",
      "Time Management",
    ],
  };

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <h2 className="text-3xl mb-8">MY SKILLS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(skills).map(([section, items]) => (
          <div key={section}>
            <h3 className="font-semibold mb-4">{section}</h3>
            <ul className="list-disc ml-5 space-y-2">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
