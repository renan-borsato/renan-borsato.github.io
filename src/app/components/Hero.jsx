import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 relative">
        <div className="flex justify-center md:justify-start md:w-auto">
          <Image src="/headshot_nobg.png" alt="me" width={256} height={256} />
        </div>

        <div className="flex-1 text-left">
          <p className="text-2xl mb-2">HEY THERE!</p>
          <h1 className="text-4xl font-bold mb-2">I AM RENAN BORSATO</h1>
          <p className="text-xl mb-12">FULL STACK DEVELOPER</p>
          <a
          href="https://github.com/renan-borsato"
          className="flex items-center gap-4 text-blue-600 dark:text-blue-400"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="dark:invert"
          />
          VIEW MY WORK
        </a>
        </div>
      </div>
    </section>
  );
}
