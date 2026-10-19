import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

export default function Hero() {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "stephen.jpg")
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="text-lg text-gray-300 sm:text-xl">
            Full-Stack Developer
          </p>
          <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">Stephen</span>
            <br />
            Onyango
          </h1>
          <p className="mt-6 max-w-md text-gray-400">
            I build fast, secure web apps with Next.js, React and TypeScript.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          {hasPhoto ? (
            <Image
              src="/stephen.jpg"
              alt="Portrait of Stephen Onyango"
              width={520}
              height={620}
              priority
              className="h-auto w-full max-w-sm object-cover md:max-w-md"
            />
          ) : (
            <div className="flex aspect-[5/6] w-full max-w-sm items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:max-w-md">
              <span className="text-8xl font-bold text-accent">S</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
