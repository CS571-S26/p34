export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                {/* <h3 className="font-semibold text-white">University Research</h3> */}
              </div>
            </div>
            <p className="text-sm text-gray-400">
              A project for CS 571 - Spring 2026 by Brian F. Batista
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}