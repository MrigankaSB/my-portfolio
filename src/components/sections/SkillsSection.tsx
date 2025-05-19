"use client";

import { motion } from "framer-motion";
import { FaCode, FaTools, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiPrisma,
} from "react-icons/si";

const skillCategories = [
  {
    icon: <FaCode className="text-3xl text-sky-500" />,
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js 15", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    icon: <FaDatabase className="text-3xl text-green-500" />,
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: <FaCode /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
    ],
  },
  {
    icon: <FaTools className="text-3xl text-yellow-400" />,
    title: "Other Skills",
    skills: [
      { name: "C++ (DSA)", icon: <SiCplusplus /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] rounded-xl shadow-lg p-6 hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg text-gray-300 hover:text-white transition"
                  >
                    <span className="text-xl">{skill.icon}</span> {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
