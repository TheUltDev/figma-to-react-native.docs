export default function HomePage() {
  const guides = [
    {
      title: "Installing",
      description: "Learn how to install the plugin and get started.",
      iconPath: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
      iconBgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      iconColor: "text-white"
    },
    {
      title: "Troubleshooting",
      description: "Check if you're experiencing common issues.",
      iconPath: "m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4",
      iconBgColor: "bg-gradient-to-br from-red-400 to-red-600",
      iconColor: "text-white"
    },
    {
      title: "Designing",
      description: "Guides for creating components and using the design system.",
      iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      iconBgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      iconColor: "text-white"
    },
    {
      title: "Exporting",
      description: "Export your Figma designs for use in your React Native project.",
      iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
      iconBgColor: "bg-gradient-to-br from-green-400 to-green-600",
      iconColor: "text-white"
    },
    {
      title: "Syncing",
      description: "Use MCP for AI agents or real-time syncing to your filesystem.",
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      iconBgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      iconColor: "text-white"
    }
  ];

  const articles = [
    {
      title: "Getting Started with Component Generation",
      description: "Learn how to convert your first Figma component into production-ready React Native code with automatic variant support and clean prop APIs.",
      category: "Getting Started",
      categoryColor: "bg-gradient-to-r from-emerald-500 to-teal-600",
      href: "/docs/features#component-generation"
    },
    {
      title: "Building a Complete Design System",
      description: "Extract colors, fonts, and design tokens from Figma variables to create a comprehensive theme system powered by react-native-unistyles.",
      category: "Theming",
      categoryColor: "bg-gradient-to-r from-violet-500 to-purple-600",
      href: "/docs/theming"
    },
    {
      title: "Advanced Icon Management with Iconify",
      description: "Import entire icon sets from Iconify and seamlessly integrate them into your Figma designs and generated React Native components.",
      category: "Advanced",
      categoryColor: "bg-gradient-to-r from-rose-500 to-pink-600",
      href: "/docs/advanced#icon-management"
    },
    {
      title: "Exporting Projects and Managing Assets",
      description: "Master the art of exporting complete projects with optimized asset handling, including SVGs, PNGs, and even Lottie animations.",
      category: "Usage",
      categoryColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
      href: "/docs/usage#building-a-project"
    },
    {
      title: "Storybook Integration Best Practices",
      description: "Automatically generate interactive Storybook stories for your components with prop controls and variant testing capabilities.",
      category: "Development",
      categoryColor: "bg-gradient-to-r from-orange-500 to-amber-600",
      href: "/docs/features#storybook-integration"
    },
    {
      title: "Pre-built EXO Components Library",
      description: "Speed up your development with ready-to-use UI components including buttons, sliders, popovers, and more from the EXO collection.",
      category: "Components",
      categoryColor: "bg-gradient-to-r from-indigo-500 to-blue-600",
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
                title={guides[0].title}
                description={guides[0].description}
                iconPath={guides[0].iconPath}
                iconBgColor={guides[0].iconBgColor}
                iconColor={guides[0].iconColor}
              />
              <HomeBox
                title={guides[1].title}
                description={guides[1].description}
                iconPath={guides[1].iconPath}
                iconBgColor={guides[1].iconBgColor}
                iconColor={guides[1].iconColor}
              />
            </div>
            {/* Second Row - 3 Boxes */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <HomeBox
                title={guides[4].title}
                description={guides[4].description}
                iconPath={guides[4].iconPath}
                iconBgColor={guides[4].iconBgColor}
                iconColor={guides[4].iconColor}
                isLarge={true}
              />
            </div>
            <HomeBox
              title={guides[2].title}
              description={guides[2].description}
              iconPath={guides[2].iconPath}
              iconBgColor={guides[2].iconBgColor}
              iconColor={guides[2].iconColor}
            />
            <HomeBox
              title={guides[3].title}
              description={guides[3].description}
              iconPath={guides[3].iconPath}
              iconBgColor={guides[3].iconBgColor}
              iconColor={guides[3].iconColor}
            />
          </div>
        </div>

        {/* Articles Section */}
        <div className="max-w-6xl mx-auto">
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
                title={article.title}
                description={article.description}
                category={article.category}
                categoryColor={article.categoryColor}
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
}

function HomeBox({ title, description, iconPath, iconBgColor, iconColor, isLarge = false }: HomeBoxProps) {
  return (
    <div className={`group relative bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-200/20 dark:hover:shadow-gray-900/20 transition-all duration-500 cursor-pointer overflow-hidden ${isLarge ? 'h-full flex flex-col justify-center' : ''}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-700 animate-pulse delay-300"></div>

      <div className="relative z-10">
        <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${isLarge ? 'mx-auto' : ''}`}>
          <svg className={`w-8 h-8 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-3 text-fd-foreground group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 ${isLarge ? 'text-center text-2xl' : ''}`}>
          {title}
        </h3>
        <p className={`text-fd-muted-foreground group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed ${isLarge ? 'text-center text-lg' : ''}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  href: string;
}

function ArticleCard({ title, description, category, categoryColor, href }: ArticleCardProps) {
  return (
    <a
      href={href}
      className="group relative block bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-200/20 dark:hover:shadow-gray-900/20 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1 hover:scale-[1.02]"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-700 animate-pulse delay-300"></div>

      <div className="relative z-10">
        <div className="mb-4">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-white ${categoryColor} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-fd-foreground group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-fd-muted-foreground group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
          Learn more
          <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
