import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
        Welcome to your portfolio
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl">
        This is your premium portfolio with a beautiful responsive sidebar,
        smooth animations, and modern design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/projects"
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:bg-white/10 hover:border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
            Projects
          </h3>
          <p className="text-gray-400 relative z-10">
            Showcase your amazing projects with interactive demos and case
            studies.
          </p>
          <div className="mt-4 text-blue-400 text-sm font-medium relative z-10">
            View Projects →
          </div>
        </Link>

        <Link
          href="/experience"
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:bg-white/10 hover:border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
            Experience
          </h3>
          <p className="text-gray-400 relative z-10">
            Highlight your professional journey and career achievements.
          </p>
          <div className="mt-4 text-green-400 text-sm font-medium relative z-10">
            View Experience →
          </div>
        </Link>

        <Link
          href="/about"
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:bg-white/10 hover:border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
            About Me
          </h3>
          <p className="text-gray-400 relative z-10">
            Learn more about my background, skills, and passion for development.
          </p>
          <div className="mt-4 text-purple-400 text-sm font-medium relative z-10">
            Learn More →
          </div>
        </Link>
      </div>

      {/* Additional content sections */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Work</h2>
          <p className="text-gray-400 mb-6">
            Check out some of my latest projects and contributions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">P1</span>
              </div>
              <div>
                <h4 className="font-semibold text-white">Project Name</h4>
                <p className="text-sm text-gray-400">
                  Brief project description
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Let's connect and discuss potential opportunities.
          </p>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Link>
            <button className="px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
