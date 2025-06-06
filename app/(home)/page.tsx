export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto border border-fd-border rounded-lg overflow-hidden">
          {/* First Row - 2 Boxes */}
          <div className="flex flex-col sm:flex-row w-full">
            {/* Installing Box */}
            <div className="bg-fd-card p-6 hover:shadow-xl transition-shadow cursor-pointer flex-1 border-b sm:border-b-0 sm:border-r border-fd-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fd-foreground">
                Installing
              </h3>
              <p className="text-fd-muted-foreground text-sm">
                Get started by installing the necessary tools and dependencies for your React Native project.
              </p>
            </div>
            {/* Get Started Box */}
            <div className="bg-fd-card p-6 hover:shadow-xl transition-shadow cursor-pointer flex-1 border-b sm:border-b-0 border-fd-border">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fd-foreground">
                Get Started
              </h3>
              <p className="text-fd-muted-foreground text-sm">
                Quick start guide to set up your first Figma to React Native workflow.
              </p>
            </div>
          </div>

          {/* Second Row - 3 Boxes */}
          <div className="flex flex-col sm:flex-row w-full sm:border-t border-fd-border">
            {/* Designing Box */}
            <div className="bg-fd-card p-6 hover:shadow-xl transition-shadow cursor-pointer flex-1 border-b sm:border-b-0 sm:border-r border-fd-border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fd-foreground">
                Designing
              </h3>
              <p className="text-fd-muted-foreground text-sm">
                Learn how to create and design your components in Figma for optimal code generation.
              </p>
            </div>
            {/* Exporting Box */}
            <div className="bg-fd-card p-6 hover:shadow-xl transition-shadow cursor-pointer flex-1 border-b sm:border-b-0 sm:border-r border-fd-border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fd-foreground">
                Exporting
              </h3>
              <p className="text-fd-muted-foreground text-sm">
                Export your Figma designs and prepare them for React Native development.
              </p>
            </div>
            {/* Syncing Box */}
            <div className="bg-fd-card p-6 hover:shadow-xl transition-shadow cursor-pointer flex-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fd-foreground">
                Syncing
              </h3>
              <p className="text-fd-muted-foreground text-sm">
                Use MCP for AI agents or real-time syncing to your filesystem to skip manual exports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
