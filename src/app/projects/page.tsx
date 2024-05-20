//src/app/projects.tsx

export default function Projects() {
    return (
      <main>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Projects
        </h1>
        <div id="scraper">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Scraper
            </h2>
            <p>
                lorem ipsum
            </p>
        </div>
        <div id="portfolio">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Portfolio
        </h2>
        </div>
        <div id = "llm">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Llama3 Model
        </h2>
        </div>
      </main>
    );
  }