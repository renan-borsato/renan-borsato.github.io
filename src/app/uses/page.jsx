"use client";

import { useState, useEffect } from "react";
import UsesSection from "../components/UsesSection/UsesSection";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

export default function UsesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const usesItems = [
    {
      groupName: "Hardware",
      items: [
        { title: "Laptop", description: 'MacBook Pro 16"' },
        { title: "Monitor", description: "Dell 4K UltraSharp" },
        { title: "Keyboard", description: "Keychron K8" },
        { title: "Mouse", description: "Logitech MX Master 3" },
      ],
    },
    {
      groupName: "Software",
      items: [
        { title: "Editor", description: "VS Code" },
        { title: "Terminal", description: "iTerm2" },
        { title: "Version Control", description: "Git & GitHub" },
        { title: "Browser", description: "Google Chrome" },
      ],
    },
    {
      groupName: "Utilities & Tools",
      items: [
        { title: "Task Manager", description: "Notion" },
        { title: "Design & Prototyping", description: "Figma" },
        { title: "Package Manager", description: "npm / yarn" },
      ],
    },
  ];

  return (
    <>
      {mounted && <ThemeSwitcher />}
      <main style={{ padding: "32px", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "24px" }}>
          My Setup & Tools
        </h1>
        <UsesSection items={usesItems} />
      </main>
    </>
  );
}
