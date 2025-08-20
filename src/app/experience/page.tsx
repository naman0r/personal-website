"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      company: "Auribus Labs",
      title: "Software Engineer Intern",
      period: "April — Aug 2025",
      location: "Boston, MA",
      link: "https://www.auribuslabs.com/",
      description: "",
      technologies: [
        "Swift",
        "SwiftUI",
        "iOS Development",
        "GCP",
        "Hasura",
        "GraphQL",
      ],
    },
    {
      company: "Code4Community at Northeastern (Student Organization)",
      title: "SWE",
      period: "Present",
      link: "https://www.c4cneu.com/",
      location: "Boston, MA",
      description: "",
      technologies: [],
    },

    {
      company: "Venu AI (YC W21)",
      title: "TPM and SWE Intern",
      period: "April — July 2024",
      link: "https://www.venu3d.com/",
      location: "Remote",
      description: "",
      technologies: ["React", "Python", "Django", "Azure", "Celery", "Redis"],
    },
    {
      company: "Forge",
      title: "Product Developer",
      link: "https://www.forgenu.com/",
      period: "Sep 2024 — May 2025",
      location: "Boston, MA",
      description:
        "Built mobile applications for real-world client projects and startups.",
      technologies: ["React Native", "Expo", "TypeScript", "MongoDB"],
    },
    {
      company: "TAMID at Northeastern",
      title: "Software Developer",
      link: "https://www.nutamidtech.org/about",
      period: "Jan 2025 — Present",
      location: "Boston, MA",
      description: "",
      technologies: ["React", "Python", "Flask", "Docker", "PostgreSQL"],
    },
  ];

  const education = {
    school: "Northeastern University",
    degree: "BS Computer Science & Business Administration",
    period: "December 2027",
    location: "Boston, MA",
    gpa: "3.89 GPA | Dean's List",
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Experience
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            My experience so far through Internships and Club projects at
            Northeastern
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-12">
            Professional Experience
          </h2>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left: Company & Period */}
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                    <p className="text-sm text-gray-600">{exp.location}</p>
                  </div>

                  {/* Right: Title & Description */}
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-light text-gray-200 mb-3">
                      {exp.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gray-900 text-gray-300 rounded-full border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle divider */}
                {index < experiences.length - 1 && (
                  <div className="mt-16 w-full h-px bg-gray-900" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-gray-600 mb-12">
            Education
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium text-white mb-1">
                {education.school}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{education.period}</p>
              <p className="text-sm text-gray-600">{education.location}</p>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xl font-light text-gray-200 mb-2">
                {education.degree}
              </h4>
              <p className="text-gray-400">{education.gpa}</p>
            </div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-gray-900"
        >
          <p className="text-gray-500 text-sm mb-4">
            Interested in working together?
          </p>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition-colors underline"
          >
            Let's connect
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
