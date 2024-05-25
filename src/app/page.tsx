//src/app/home.tsx
import Link from "next/link";

export default function Home() {
  return (

  <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Stefan Tesliuc
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Welcome! I am an aspiring AI researcher, and this is a place where I share my thoughts, post cool projects I&apos;ve worked on, and give folks a way to reach out.
        For more information about me, check out my 
        <Link href="/about" className="no-underline hover:underline ps-0\1 pe-1">
          About Me
        </Link>
        page.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Research Interests
      </h2>
      <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
        &quot;I come with empty hands and the desire to unbuild walls.&quot; 
        <p>Ursula K. Le Guin</p>
      </blockquote>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I believe all knowledge is interdisplinary, where any field of knowledge is just a few hops away from another.
        This is found all over in mathematics and computer science, from Category Theory bringing us cs design patterns, to the same field proving theories of conciousness from the Yoneda Lemma.
        Thermodynamics brought us Diffusion algorithms, and Entymology spawned ACO algorithms from the behavior of ants.
        Everything is connected, and inspiration is everywhere, if you are open to it.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am most interested in the intersection of knowledge domains. I am an applied research researcher.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        ML Experimentation
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am currently working on how to embed various data sources, and use these embeddings directly as features, or as inputs to ML models.
      </p>
    </div>
  );
}
