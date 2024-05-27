//src/app/home.tsx
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
  <>
  <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Stefan Tesliuc
          </h1>
          <p className="leading-7 [&:not(:first-child)]:text-xl text-muted-foreground">
            Welcome! I am an aspiring AI researcher, and this is a place where I share my thoughts, post cool projects I&apos;ve worked on, and give folks a way to reach out.
            For more information about me, check out my 
            <Link href="/about" className="no-underline hover:underline ps-1 pe-1">
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
            Machine Consciousness
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am most interested in machines that can think and feel and understand, AI that is truly intelligent. We currently cannot define human consciousness, although there are many interesting theories. I think neuroscience, computer science, quantum phyiscs, and philosophy need to work together for this one.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AI Fairness
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I think our current methods of determining fairness are still too quantitative. We need to understand qualitative human experience before we abstract it away to the machines.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            ML in Banking
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am currently working on embeddings of transaction data, and experimenting with using these embeddings both directly as features, or as inputs to ML models.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-30">
        <h2 className="text-4xl font-black text-center">
          Latest Blog Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
  </>
  );
}
