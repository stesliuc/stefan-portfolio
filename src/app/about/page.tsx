//src/app/about.tsx

import Link from "next/link";

export default function About() {
    return (
      <main>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          About Me
        </h1>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;Insert quote here.&quot;
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          My name is Mihai Stefan Tesliuc (he/him/his), but I go by Stefan. 
          I have a few labels. 
          I am an aspiring researcher in Artificial Intelligency and Machine Learning.
          I am a Manager at Capital One in their Customer Management division where I head a Machine Learning Innovation team.
          The team is currently just myself but at least that limits the interpersonal drama. 
          I am a mathematician too; quite out of practice with theoretical proofs, but maintaining a passion for cramming my brain with hard concepts.
          I am a Brazilian Jiu Jitsu blue belt at Fifty Fifty academy in Falls Church, VA, which is the only non-participation trophy achievement I have accomplished due to physical prowess.
          I am a nature lover, a romantic idealist, and live quite a happy life in the DC area with my girlfriend Sofie.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          What Motivates Me
        </h2>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;Insert aristotle quote here.&quot;
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Research thrusts I care about
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          List of different Philsophers
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          General moral compass and people that inspire me
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Background
        </h2>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;Insert quote here.&quot;
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am a Romanian immigrant, and grew up in the United States and Kenya. 
          I studied mathematics in undergrad at The University of Chicago.
        </p>
      </main>
    );
  }
  