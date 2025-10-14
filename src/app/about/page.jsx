"use client";

import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

export default function AboutPage() {
  return (
    <>
      <ThemeSwitcher />

      <main style={{ padding: "32px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>About Me</h1>

        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>
          Hi! I'm Renan Borsato, a passionate software developer specializing in
          building interactive web applications. I enjoy creating clean, modern
          interfaces and crafting user experiences that are both functional and engaging.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "16px" }}>
          Over the years, I’ve worked on projects involving React, Next.js, and
          other modern web technologies. I thrive on solving complex problems and
          continuously learning new skills to stay at the forefront of web development.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          When I'm not coding, I enjoy exploring new technologies, reading about
          software design, and experimenting with creative projects that combine
          technology and design.
        </p>
      </main>
    </>
  );
}
