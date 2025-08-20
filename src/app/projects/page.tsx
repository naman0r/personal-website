export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A full-stack web application built with Next.js and Node.js",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      status: "Completed",
      link: "#",
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform with real-time features",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "In Progress",
      link: "#",
    },
    {
      title: "Project Three",
      description:
        "AI-powered productivity tool with machine learning integration",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      status: "Planning",
      link: "#",
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
        My Projects
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl">
        Here are some of the projects I've worked on, showcasing my skills in
        various technologies and frameworks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Open Source Contributions
        </h2>
        <p className="text-gray-400 mb-6">
          I actively contribute to open source projects and believe in giving
          back to the developer community.
        </p>
        <a
          href="https://github.com/naman0r"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
        >
          View GitHub →
        </a>
      </div>
    </>
  );
}
