export default function HomePage() {
  const guides = [
    {
      title: "Installing",
      description: "Learn how to install the plugin and get started.",
      iconPath: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      title: "Troubleshooting",
      description: "Check if you're experiencing common issues.",
      iconPath: "m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4",
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      title: "Designing",
      description: "Guides for creating components and using the design system.",
      iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Exporting",
      description: "Export your Figma designs for use in your React Native project.",
      iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Syncing",
      description: "Use MCP for AI agents or real-time syncing to your filesystem.",
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  const popularArticles = [
    {
      title: "Getting Started with Component Generation",
      description: "Learn how to convert your first Figma component into production-ready React Native code with automatic variant support and clean prop APIs.",
      category: "Getting Started",
      href: "/docs/features#component-generation"
    },
    {
      title: "Building a Complete Design System",
      description: "Extract colors, fonts, and design tokens from Figma variables to create a comprehensive theme system powered by react-native-unistyles.",
      category: "Theming",
      href: "/docs/theming"
    },
    {
      title: "Advanced Icon Management with Iconify",
      description: "Import entire icon sets from Iconify and seamlessly integrate them into your Figma designs and generated React Native components.",
      category: "Advanced",
      href: "/docs/advanced#icon-management"
    },
    {
      title: "Exporting Projects and Managing Assets",
      description: "Master the art of exporting complete projects with optimized asset handling, including SVGs, PNGs, and even Lottie animations.",
      category: "Usage",
      href: "/docs/usage#building-a-project"
    },
    {
      title: "Storybook Integration Best Practices",
      description: "Automatically generate interactive Storybook stories for your components with prop controls and variant testing capabilities.",
      category: "Development",
      href: "/docs/features#storybook-integration"
    },
    {
      title: "Pre-built EXO Components Library",
      description: "Speed up your development with ready-to-use UI components including buttons, sliders, popovers, and more from the EXO collection.",
      category: "Components",
      href: "/docs/advanced#pre-built-components-exo"
    }
  ];

  return (
    <main className="flex flex-1 flex-col py-20">
      <div className="container mx-auto px-4">
        {/* Guides Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-medium text-fd-muted-foreground mb-8 text-left">
            Guides
          </h2>
          <div className="flex flex-col text-center justify-center items-center max-w-4xl mx-auto border border-fd-border rounded-lg overflow-hidden">
            {/* First Row - 2 Boxes */}
            <div className="flex flex-col sm:flex-row w-full">
              <HomeBox
                title={guides[0].title}
                description={guides[0].description}
                iconPath={guides[0].iconPath}
                iconBgColor={guides[0].iconBgColor}
                iconColor={guides[0].iconColor}
                borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
              />
              <HomeBox
                title={guides[1].title}
                description={guides[1].description}
                iconPath={guides[1].iconPath}
                iconBgColor={guides[1].iconBgColor}
                iconColor={guides[1].iconColor}
                borderClasses="border-b sm:border-b-0 border-fd-border"
              />
            </div>
            {/* Second Row - 3 Boxes */}
            <div className="flex flex-col sm:flex-row w-full sm:border-t border-fd-border">
              <HomeBox
                title={guides[2].title}
                description={guides[2].description}
                iconPath={guides[2].iconPath}
                iconBgColor={guides[2].iconBgColor}
                iconColor={guides[2].iconColor}
                borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
              />
              <HomeBox
                title={guides[3].title}
                description={guides[3].description}
                iconPath={guides[3].iconPath}
                iconBgColor={guides[3].iconBgColor}
                iconColor={guides[3].iconColor}
                borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
              />
              <HomeBox
                title={guides[4].title}
                description={guides[4].description}
                iconPath={guides[4].iconPath}
                iconBgColor={guides[4].iconBgColor}
                iconColor={guides[4].iconColor}
                borderClasses=""
              />
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium text-fd-muted-foreground mb-8 text-left">
            Articles
          </h2>
          <div className="border border-fd-border rounded-lg overflow-hidden">
            {/* First Row - 3 Articles */}
            <div className="flex flex-col lg:flex-row">
              <ArticleCard
                title={popularArticles[0].title}
                description={popularArticles[0].description}
                category={popularArticles[0].category}
                href={popularArticles[0].href}
                borderClasses="border-b lg:border-b-0 lg:border-r border-fd-border"
              />
              <ArticleCard
                title={popularArticles[1].title}
                description={popularArticles[1].description}
                category={popularArticles[1].category}
                href={popularArticles[1].href}
                borderClasses="border-b lg:border-b-0 lg:border-r border-fd-border"
              />
              <ArticleCard
                title={popularArticles[2].title}
                description={popularArticles[2].description}
                category={popularArticles[2].category}
                href={popularArticles[2].href}
                borderClasses="border-b lg:border-b-0 border-fd-border"
              />
            </div>
            {/* Second Row - 3 Articles */}
            <div className="flex flex-col lg:flex-row lg:border-t border-fd-border">
              <ArticleCard
                title={popularArticles[3].title}
                description={popularArticles[3].description}
                category={popularArticles[3].category}
                href={popularArticles[3].href}
                borderClasses="border-b lg:border-b-0 lg:border-r border-fd-border"
              />
              <ArticleCard
                title={popularArticles[4].title}
                description={popularArticles[4].description}
                category={popularArticles[4].category}
                href={popularArticles[4].href}
                borderClasses="border-b lg:border-b-0 lg:border-r border-fd-border"
              />
              <ArticleCard
                title={popularArticles[5].title}
                description={popularArticles[5].description}
                category={popularArticles[5].category}
                href={popularArticles[5].href}
                borderClasses=""
              />
            </div>
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
  borderClasses: string;
}

function HomeBox({ title, description, iconPath, iconBgColor, iconColor, borderClasses }: HomeBoxProps) {
  return (
    <div className={`bg-fd-card p-6 hover:shadow-xl transition-shadow cursor-pointer flex-1 relative overflow-hidden group ${borderClasses}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 transition-opacity duration-0 group-hover:transition-transform group-hover:duration-700 ease-in-out"></div>
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-fd-foreground">
        {title}
      </h3>
      <p className="text-fd-muted-foreground text-sm">
        {description}
      </p>
    </div>
  );
}

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
}

function ArticleCard({ title, description, category, href, borderClasses }: ArticleCardProps & { borderClasses: string }) {
  return (
    <a
      href={href}
      className={`block bg-fd-card p-6 hover:shadow-xl transition-shadow cursor-pointer flex-1 relative overflow-hidden group ${borderClasses}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 transition-opacity duration-0 group-hover:transition-transform group-hover:duration-700 ease-in-out"></div>
      <div className="mb-3 relative z-10">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fd-muted text-fd-muted-foreground">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-fd-foreground relative z-10">
        {title}
      </h3>
      <p className="text-fd-muted-foreground text-sm mb-4 line-clamp-2 relative z-10">
        {description}
      </p>
    </a>
  );
}
