"use client";

import { useEffect, useState } from "react";

const titles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Backend Engineer",
  "Problem Solver",
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPING = 1500;
const PAUSE_AFTER_DELETING = 300;

export default function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = titles[index];
    let delay = deleting ? DELETE_SPEED : TYPE_SPEED;

    if (!deleting && text === full) delay = PAUSE_AFTER_TYPING;
    if (deleting && text === "") delay = PAUSE_AFTER_DELETING;

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % titles.length);
      } else {
        setText(
          deleting
            ? full.slice(0, text.length - 1)
            : full.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <p
      className="min-h-[1.75rem] text-lg text-gray-300 sm:min-h-[2rem] sm:text-xl"
      aria-label="Full-Stack Developer, UI/UX Enthusiast, Backend Engineer, Problem Solver"
    >
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle"
        style={{ height: "1.1em" }}
      />
    </p>
  );
}
