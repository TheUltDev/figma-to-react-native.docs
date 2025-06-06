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

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto border border-fd-border rounded-lg overflow-hidden">
          {/* First Row - 2 Boxes */}
          <div className="flex flex-col sm:flex-row w-full">
            <HomeBox
              title="Installing"
              description="Get started by installing the necessary tools and dependencies for your React Native project."
              iconPath="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              iconBgColor="bg-orange-100"
              iconColor="text-orange-600"
              borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
            />
            <HomeBox
              title="Get Started"
              description="Quick start guide to set up your first Figma to React Native workflow."
              iconPath="M13 10V3L4 14h7v7l9-11h-7z"
              iconBgColor="bg-indigo-100"
              iconColor="text-indigo-600"
              borderClasses="border-b sm:border-b-0 border-fd-border"
            />
          </div>

          {/* Second Row - 3 Boxes */}
          <div className="flex flex-col sm:flex-row w-full sm:border-t border-fd-border">
            <HomeBox
              title="Designing"
              description="Learn how to create and design your components in Figma for optimal code generation."
              iconPath="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              iconBgColor="bg-blue-100"
              iconColor="text-blue-600"
              borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
            />
            <HomeBox
              title="Exporting"
              description="Export your Figma designs and prepare them for React Native development."
              iconPath="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
              borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
            />
            <HomeBox
              title="Syncing"
              description="Use MCP for AI agents or real-time syncing to your filesystem to skip manual exports."
              iconPath="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              iconBgColor="bg-purple-100"
              iconColor="text-purple-600"
              borderClasses=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
