export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
          {/* Designing Box */}
          <div className="bg-fd-card rounded-lg shadow-lg p-6 border border-fd-border hover:shadow-xl transition-shadow cursor-pointer flex-1 max-w-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-fd-foreground">Designing</h3>
            <p className="text-fd-muted-foreground text-sm">Learn how to design your components in Figma for optimal React Native conversion.</p>
          </div>

          {/* Exporting Box */}
          <div className="bg-fd-card rounded-lg shadow-lg p-6 border border-fd-border hover:shadow-xl transition-shadow cursor-pointer flex-1 max-w-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-fd-foreground">Exporting</h3>
            <p className="text-fd-muted-foreground text-sm">Export your Figma designs and prepare them for React Native development.</p>
          </div>

          {/* MCP Setup Box */}
          <div className="bg-fd-card rounded-lg shadow-lg p-6 border border-fd-border hover:shadow-xl transition-shadow cursor-pointer flex-1 max-w-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-fd-foreground">Syncing</h3>
            <p className="text-fd-muted-foreground text-sm">Set up Model Context Protocol for seamless Figma to React Native workflow.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
