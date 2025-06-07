import { GlassBackground } from "../components/GlassBackground";
import { FloatingAtom } from "../components/FloatingAtom";
import Link from "next/link";

export default function HomePage() {
  const guides = [
    {
      title: "Installing",
      description: "Learn how to install the plugin and get started.",
      iconBgColor: "bg-gradient-to-br from-gray-500 to-gray-600",
      iconColor: "text-white",
      iconPath: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
      href: "/docs/guides/installing"
    },
    {
      title: "Troubleshooting",
      description: "Check if you're experiencing common issues.",
      iconBgColor: "bg-gradient-to-br from-[#F24E1E] to-[#FF7262]",
      iconColor: "text-white",
      iconPath: "m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4",
      href: "/docs/guides/troubleshooting"
    },
    {
      title: "Designing",
      description: "Guides for creating components and using the design system.",
      iconBgColor: "bg-gradient-to-br from-[#1ABCFE] to-[#1C87B3]",
      iconColor: "text-white",
      iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      href: "/docs/guides/designing"
    },
    {
      title: "Exporting",
      description: "Export your Figma designs for use in your React Native project.",
      iconBgColor: "bg-gradient-to-br from-[#0ACF83] to-[#099D64]",
      iconColor: "text-white",
      iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
      href: "/docs/guides/exporting"
    },
    {
      title: "Syncing",
      description: "Use MCP for AI agents or real-time syncing to your filesystem.",
      iconBgColor: "bg-gradient-to-br from-[#8049C7] to-[#A259FF]",
      iconColor: "text-white",
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      href: "/docs/guides/syncing"
    }
  ];

  const articles = [
    {
      title: "Getting Started with Component Generation",
      description: "Learn how to convert your first Figma component into production-ready React Native code with automatic variant support and clean prop APIs.",
      href: "/docs/features#component-generation"
    },
    {
      title: "Building a Complete Design System",
      description: "Extract colors, fonts, and design tokens from Figma variables to create a comprehensive theme system powered by react-native-unistyles.",
      href: "/docs/theming"
    },
    {
      title: "Advanced Icon Management with Iconify",
      description: "Import entire icon sets from Iconify and seamlessly integrate them into your Figma designs and generated React Native components.",
      href: "/docs/advanced#icon-management"
    },
    {
      title: "Exporting Projects and Managing Assets",
      description: "Master the art of exporting complete projects with optimized asset handling, including SVGs, PNGs, and even Lottie animations.",
      href: "/docs/usage#building-a-project"
    },
    {
      title: "Storybook Integration Best Practices",
      description: "Automatically generate interactive Storybook stories for your components with prop controls and variant testing capabilities.",
      href: "/docs/features#storybook-integration"
    },
    {
      title: "Pre-built EXO Components Library",
      description: "Speed up your development with ready-to-use UI components including buttons, sliders, popovers, and more from the EXO collection.",
      href: "/docs/advanced#pre-built-components-exo"
    }
  ];

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
              <HomeBox
                index={0}
                title={guides[0].title}
                description={guides[0].description}
                iconBgColor={guides[0].iconBgColor}
                iconColor={guides[0].iconColor}
                iconPath={guides[0].iconPath}
                href={guides[0].href}
              />
              <HomeBox
                index={1}
                title={guides[1].title}
                description={guides[1].description}
                iconBgColor={guides[1].iconBgColor}
                iconColor={guides[1].iconColor}
                iconPath={guides[1].iconPath}
                href={guides[1].href}
              />
            </div>
            {/* Syncing Box - Left centered on < 1024px */}
            <div className="md:col-start-1 md:row-start-2 lg:col-start-3 lg:col-span-1 lg:row-span-2 lg:row-start-1">
              <HomeBox
                index={2}
                title={guides[4].title}
                description={guides[4].description}
                iconBgColor={guides[4].iconBgColor}
                iconColor={guides[4].iconColor}
                iconPath={guides[4].iconPath}
                isLarge={true}
                href={guides[4].href}
              />
            </div>
            {/* Second Row - 2 Boxes */}
            <HomeBox
              index={3}
              title={guides[2].title}
              description={guides[2].description}
              iconBgColor={guides[2].iconBgColor}
              iconColor={guides[2].iconColor}
              iconPath={guides[2].iconPath}
              href={guides[2].href}
            />
            <HomeBox
              index={4}
              title={guides[3].title}
              description={guides[3].description}
              iconBgColor={guides[3].iconBgColor}
              iconColor={guides[3].iconColor}
              iconPath={guides[3].iconPath}
              href={guides[3].href}
            />
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
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                index={index}
                title={article.title}
                description={article.description}
                href={article.href}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

interface HomeBoxProps {
  title: string;
  description: string;
  iconPath: string;
  iconBgColor: string;
  iconColor: string;
  isLarge?: boolean;
  index: number;
  href: string;
}

function HomeBox({ title, description, iconPath, iconBgColor, iconColor, isLarge = false, index, href }: HomeBoxProps) {
  return (
    <Link href={href} className={`group relative bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20 transition-all duration-500 cursor-pointer overflow-hidden ${isLarge ? 'h-full flex flex-col justify-center' : ''}`}>
      <GlassBackground />
      <FloatingAtom className="top-4 right-4" electronCount={index + 1}/>
      <div className="relative z-10">
        <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${isLarge ? 'lg:mx-auto' : ''}`}>
          <svg className={`w-8 h-8 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-3 text-fd-foreground group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300 ${isLarge ? 'lg:text-center lg:text-2xl' : ''}`}>
          {title}
        </h3>
        <p className={`text-fd-muted-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed ${isLarge ? 'lg:text-center lg:text-lg' : ''}`}>
          {description}
        </p>
      </div>
    </Link>
  );
}

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

function ArticleCard({ title, description, href, index }: ArticleCardProps) {
  return (
    <Link href={href} className="group relative block bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900/50 dark:to-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1 hover:scale-[1.02]">
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
          {title}
        </h3>
        <p className="text-fd-muted-foreground group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed line-clamp-3">
          {description}
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
