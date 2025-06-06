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
              description="Learn how to install the plugin and get started."
              iconPath="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              iconBgColor="bg-orange-100"
              iconColor="text-orange-600"
              borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
            />
            <HomeBox
              title="Troubleshooting"
              description="Check if you're experiencing common issues."
              iconPath="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"
              iconBgColor="bg-red-100"
              iconColor="text-red-600"
              borderClasses="border-b sm:border-b-0 border-fd-border"
            />
          </div>

          {/* Second Row - 3 Boxes */}
          <div className="flex flex-col sm:flex-row w-full sm:border-t border-fd-border">
            <HomeBox
              title="Designing"
              description="Guides for creating components and using the design system."
              iconPath="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              iconBgColor="bg-blue-100"
              iconColor="text-blue-600"
              borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
            />
            <HomeBox
              title="Exporting"
              description="Export your Figma designs for use in your React Native project."
              iconPath="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
              borderClasses="border-b sm:border-b-0 sm:border-r border-fd-border"
            />
            <HomeBox
              title="Syncing"
              description="Use MCP for AI agents or real-time syncing to your filesystem."
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
