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
          <h1 className="scroll-m-20 py-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
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
          <h2 className="mt-10 scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Research Interests
          </h2>
          <blockquote className="text-center text-lg mt-6 border-l-2 pl-6 italic">
            &quot;I come with empty hands and the desire to unbuild walls.&quot; 
            <p>Ursula K. Le Guin</p>
          </blockquote>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am interested in how neurosicence, psychology, and philosophy can be applied to make machine learning algorithms smarter.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I feel like we have skipped a few steps with Artificial Intelligence, the first being an understanding of what intelligence actually is.
            Instead of trying to improve on whatever iteration of GPT we are currently on, it makes more sense to reground our development of ML algorithms from the principles of how the human brain works.
            Of course we don&apos;t know how it works, but I am excited that a deeper study of AI can naturally lead to a deeper study and appreciation of how we function.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl pt-3 font-semibold tracking-tight">
            Machine Consciousness
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am most interested in developing machines that can think and feel and understand. 
            Sounds easy! 
            Don&apos;t worry, I&apos;m not some doomer who believes in ushering in the next way of supreme AI overlords, 
            I think developing machine consciousness is the biggest thrust we can undertake to make algorithms and AI systems that are more human and humane
            A conscious computer would by definition understand subjective experience, and thus be more suited to making ethical decisions.
            This seems preferable to unleashing some binary task masters and then have researchers scrambling to teach it to be fair after the fact.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl pt-3 font-semibold tracking-tight">
            AI Fairness
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our current methods of determining alogirthmic fairness are grounded in quantitative data analysis, 
            which will never understand the depths of the human experience. 
            Life is too complex to be distilled to a few sets of rules, meaning rules-based AI systems are anti-human in design.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am interested in AI that can understand the impacts of its decisions and can learn to act fairly.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl pt-3 font-semibold tracking-tight">
            ML in Banking
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am currently working in the financial industry, which is an application of ML at the heart of many people&apos;s lives.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I am currently working on utilizing foundation models to understand the financial life cycle of customers.
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
