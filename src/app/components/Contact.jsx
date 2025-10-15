import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 text-center">
      <h2 className="text-3xl mb-8">CONTACT ME</h2>
      <div className="flex justify-center gap-16">
        <a
          href="mailto:renanborsato2@gmail.com"
          className="flex items-center gap-4 text-blue-600 dark:text-blue-400"
        >
          <Image
            src="/email.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="dark:invert"
          />
          renanborsato2@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/renanborsato/"
          className="flex items-center gap-4 text-blue-600 dark:text-blue-400"
        >
          <Image
            src="/linkedin.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="dark:invert"
          />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
