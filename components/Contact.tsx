import { Mail, Phone } from "lucide-react";
import GithubIcon from "./GithubIcon";

const contacts = [
  {
    label: "Email",
    value: "stephenroy16130@gmail.com",
    href: "mailto:stephenroy16130@gmail.com",
    icon: <Mail size={22} />,
  },
  {
    label: "Phone",
    value: "+254 105 557 854",
    href: "tel:+254105557854",
    icon: <Phone size={22} />,
  },
  {
    label: "GitHub",
    value: "stephenroy16130-cloud",
    href: "https://github.com/stephenroy16130-cloud",
    icon: <GithubIcon size={22} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Get in <span className="text-accent">touch</span>
        </h2>
        <p className="mt-3 max-w-xl text-gray-400">
          I&apos;m open to Junior Full-Stack roles. If you have an opportunity
          or just want to say hello, reach out.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "GitHub" ? "_blank" : undefined}
              rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-accent/60"
            >
              <span className="text-accent">{item.icon}</span>
              <span className="text-sm text-gray-400">{item.label}</span>
              <span className="break-all font-medium transition-colors group-hover:text-accent">
                {item.value}
              </span>
            </a>
          ))}
        </div>

        <a
          href="mailto:stephenroy16130@gmail.com"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold transition hover:opacity-90"
        >
          Send me an email
        </a>
      </div>
    </section>
  );
}
