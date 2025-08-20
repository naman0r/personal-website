export default function Contact() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl">
        Let's connect and discuss potential opportunities or collaborations.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Connect</h2>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-sm">✉</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-sm text-gray-400">your.email@example.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/namanrusia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-sm">in</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">LinkedIn</h3>
                <p className="text-sm text-gray-400">@namanrusia</p>
              </div>
            </a>

            <a
              href="https://github.com/naman0r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-white text-sm">GH</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">GitHub</h3>
                <p className="text-sm text-gray-400">@naman0r</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
