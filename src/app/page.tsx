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
  <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10">
    <div className="container max-w-4xl py-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Stefan Tesliuc
          </h1>
          <p className="leading-7 [&:not(:first-child)]:text-xl text-muted-foreground">
            Welcome! I am an aspiring AI researcher, and this is a place where I can share my thoughts, post cool projects I&apos;ve worked on, and give folks a way to reach out.
            Check out my 
            <Link href="/about" className="no-underline hover:underline ps-1 pe-1">
              About Me
            </Link>
            page to learn more.
          </p>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Research Interests
          </h2>
          <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
            &quot;I come with empty hands and the desire to unbuild walls.&quot; 
            <p>Ursula K. Le Guin</p>
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am interested in the intersection of knowledge domains, specifically how insights in the natural sciences, psychology, neuroscience, and philosophy can create breakthroughs in math and computer science.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Category theory's Yoneda Lemma tackleda relational problems in consciouness, 
            thermodynamics gave rise to stable diffusion alogorithms, 
            and entymology spawned ACO algorithms from patterns found in ant behavior.
            I believe in the study of the patterns and threads that bind ideas together. 
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Machine Consciousness
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am most interested in developing machines that can think and feel and understand. 
            A conscious computer is predicated by an algorithmic understanding of subjective experience, 
            and thus is more suited to making and comprehending ethical decisions.
            If this goal is even possible, it is through a joint effort in neuroscience, computer science, quantum phyiscs, and philosophy.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AI Fairness
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our current methods of determining alogirthmic fairness are grounded in quantitative data analysis, 
            which will never understand the depths of the human experience. 
            Life is personal and complex and can never be distilled to a few sets of rules, 
            meaning rules-based AI systems are fundamentally anti-human in design.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am interested in developing AI that can understand the impacts of its decisions and can learn to act fairly, 
            with consideration of every outlier.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            ML in Banking
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am currently working in the financial industry, which is an exciting fronteir for ML at the heart of many people's lives.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am currently working on utilizing embeddings of transaction data as direct features to perform better customer segmentation,
            and am involved in the development of foundation models that can leverage customer inputs to deliver tailored financial services.
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
