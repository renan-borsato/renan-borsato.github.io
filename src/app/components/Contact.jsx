"use client";
import Image from "next/image";
import myImageLoader from "../../lib/image.loader";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 text-center">
      <h2 className="text-3xl mb-8 font-bold">CONTACT ME</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
        <a
          href="mailto:renanborsato2@gmail.com"
          className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Image
            loader={myImageLoader}
            src="/email.svg"
            alt="Email"
            width={24}
            height={24}
            className="dark:invert"
          />
          <span>renanborsato2@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/renanborsato/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Image
            loader={myImageLoader}
            src="/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="dark:invert"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
