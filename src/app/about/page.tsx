export default function About() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
        About Me
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl">
        Learn more about my background, skills, and passion for software
        development.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Background</h2>
          <p className="text-gray-400 mb-6">
            I'm a passionate full-stack developer with expertise in modern web
            technologies. I love creating beautiful, functional applications
            that solve real-world problems.
          </p>
          <p className="text-gray-400">
            My journey in software development started with curiosity and has
            grown into a career dedicated to building innovative solutions and
            learning new technologies.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
          <div className="space-y-3">
            {[
              "JavaScript/TypeScript",
              "React/Next.js",
              "Node.js",
              "Python",
              "Tailwind CSS",
              "Git/GitHub",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Philosophy</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I believe in writing clean, maintainable code and creating user
          experiences that are both beautiful and functional. Continuous
          learning and staying up-to-date with the latest technologies is
          essential in our rapidly evolving field.
        </p>
      </div>
    </>
  );
}
