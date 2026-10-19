import { CheckCircle2 } from "lucide-react";
import GithubIcon from "./GithubIcon";

const projects = [
  {
    title: "Computer Science Class Hub",
    description:
      "A comprehensive class management platform for a 240 student university cohort. Replaced scattered threads with a single authenticated source of truth.",
    features: [
      "Custom JWT authentication",
      "WebAuthn biometric login",
      "Role-based access (Admin/Student)",
      "Group chat",
      "Attendance tracking",
      "Live timetable",
      "Rule-based chatbot",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Neon Postgres",
      "WebAuthn",
      "JWT Auth",
      "PWA",
    ],
    github: "https://github.com/stephenroy16130-cloud",
  },
  {
    title: "Shop Chapchap",
    description:
      "A full stack e-commerce platform with a product catalog, user accounts, cart management and a checkout flow, built on a REST API backend.",
    features: [
      "Product catalog",
      "User authentication",
      "Cart management",
      "Checkout flow",
      "Delivery tracking",
      "Feedback hub",
    ],
    stack: ["Next.js", "Express", "SQL", "REST APIs"],
    github: "https://github.com/stephenroy16130-cloud",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Featured <span className="text-accent">projects</span>
        </h2>
        <p className="mt-3 max-w-xl text-gray-400">
          A selection of my work.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-accent/60"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="shrink-0 rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400">
                  Live
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-400">
                {project.description}
              </p>

              <ul className="mt-5 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  <GithubIcon size={18} />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

