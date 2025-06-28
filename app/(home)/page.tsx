import Link from "next/link";
import { FloatingAtom } from "./_ui/FloatingAtom";
import { GlassBackground } from "./_ui/GlassBackground";
import { createGuides, createArticles } from "@/lib/pages";

const guides = createGuides();
const articles = createArticles();

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col py-20">
      <div className="container mx-auto px-4">
        {/* Guides Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Get Started
            </h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to transform your Figma designs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Row - 2 Boxes */}
            <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GuideCard index={0}/>
              <GuideCard index={1}/>
            </div>
            {/* Syncing Box - Left centered on < 1024px */}
            <div className="md:col-start-1 md:row-start-2 lg:col-start-3 lg:col-span-1 lg:row-span-2 lg:row-start-1">
              <GuideCard index={2} large/>
            </div>
            {/* Second Row - 2 Boxes */}
            <GuideCard index={3}/>
            <GuideCard index={4}/>
          </div>
        </div>
        {/* Articles Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Learn More
            </h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              Deep dive into advanced features and best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((_, index) => <ArticleCard key={index} index={index}/>)}
          </div>
        </div>
      </div>
    </main>
  );
}

function GuideCard({index, large}: {index: number, large?: boolean}) {
  const data = guides[index];
  return (
    <Link href={data.href} className={`group relative bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20 transition-all duration-500 cursor-pointer overflow-hidden ${large ? 'h-full flex flex-col justify-center' : ''}`}>
      <GlassBackground />
      <FloatingAtom className="top-4 right-4" electronCount={index + 1}/>
      <div className="relative z-10">
        <div className={`w-16 h-16 ${data.homeColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${large ? 'lg:mx-auto' : ''}`}>
          {data.icon}
        </div>
        <h3 className={`text-xl font-bold mb-3 text-fd-foreground group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300 ${large ? 'lg:text-center lg:text-2xl' : ''}`}>
          {data.title}
        </h3>
        <p className={`text-fd-muted-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed ${large ? 'lg:text-center lg:text-lg' : ''}`}>
          {data.description}
        </p>
      </div>
    </Link>
  );
}

function ArticleCard({index}: {index: number}) {
  const data = articles[index];
  return (
    <Link href={data.href} className="group relative block bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1 hover:scale-[1.02]">
      <GlassBackground />
      <FloatingAtom
        className="top-4 right-4"
        nucleus="bg-gradient-to-r from-blue-400 to-blue-700"
        electronCount={index + 1}
        electrons={[
          'bg-blue-500',
          'bg-blue-200',
          'bg-blue-400',
          'bg-blue-600',
          'bg-blue-300',
          'bg-blue-700',
        ]}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 text-fd-foreground group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300 line-clamp-2">
          {data.title}
        </h3>
        <p className="text-fd-muted-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed line-clamp-3">
          {data.description}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
          Read more
          <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
