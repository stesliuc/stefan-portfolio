//src/app/contact.tsx

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Stefan",
  description: "Page where you can email me",
};

export default function Contact() {
    return (
      <main>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Contact Me
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Update with my email and have that open a form to email me
        </p>
      </main>
    );
  }
  