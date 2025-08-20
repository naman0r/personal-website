export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Led development of full-stack applications using modern web technologies",
      achievements: [
        "Improved application performance by 40%",
        "Mentored junior developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2021 - 2023",
      description:
        "Developed and maintained web applications from concept to deployment",
      achievements: [
        "Built responsive web applications",
        "Integrated third-party APIs",
        "Collaborated with design team",
      ],
    },
    {
      title: "Junior Developer",
      company: "Dev Agency",
      period: "2020 - 2021",
      description:
        "Started my professional journey learning industry best practices",
      achievements: [
        "Learned modern development practices",
        "Contributed to multiple client projects",
        "Gained experience in agile methodologies",
      ],
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
        Professional Experience
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl">
        My professional journey in software development, highlighting key roles
        and achievements.
      </p>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>
            )}

            <div className="flex gap-6">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>

              {/* Content */}
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div>
                  <h4 className="text-white font-medium mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">
                Computer Science Degree
              </h3>
              <p className="text-blue-400">University Name</p>
              <p className="text-gray-400 text-sm">2016 - 2020</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Certifications</h2>
          <div className="space-y-3">
            {[
              "AWS Certified Developer",
              "React Professional",
              "Node.js Certification",
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
