import { Code2, Database, Layout, Smartphone } from "lucide-react";

const skills = [
  { label: "Next.js", icon: Layout },
  { label: "React & TypeScript", icon: Code2 },
  { label: "Postgres & SQL", icon: Database },
  { label: "PWA & Mobile-first", icon: Smartphone },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">
          About <span className="text-accent">me</span>
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="space-y-5 text-gray-400">
            <p>
              I am a Junior Full-Stack Developer with a deep passion for
              building things from the ground up. I love the entire lifecycle
              of software development, from crafting responsive, intuitive
              interfaces on the frontend to architecting secure, efficient
              databases on the backend.
            </p>
            <p>
              I completed my full software development course at Starehe Boys
              Centre Technical Institute in conjunction with Moringa School,
              where I developed a strong foundation in modern web technologies.
              I thrive on solving complex problems technologically.
            </p>
            <p>
              My experience building the CS 1.1 Class Hub, a full-stack
              platform serving a 240-student cohort, exposed me to real-world
              technical challenges, from implementing secure biometric
              authentication to managing database latency. I&apos;ve also built
              Shop Chapchap, a full-stack e-commerce platform, which deepened my
              understanding of REST APIs and state management.
            </p>
            <p>
              Right now, I am seeking a Full-Stack developer role where I can keep
              learning, collaborate with experienced engineers, and become a
              better developer every single day. When I&apos;m not writing
              code, you&apos;ll probably find me listening to music.
            </p>
          </div>

          <div className="space-y-6">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="text-accent" size={22} />
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
              </span>
              <span className="text-sm font-medium">
                Open to Full-Stack developer roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

