"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master of Technology (M. Tech) in Geoinformatics",
    institution: "Indian Institute of Technology Kanpur (IIT Kanpur)",
    duration: "2023 – 2025",
    location: "Kanpur, Uttar Pradesh, India",
    details: [
      "Graduated with strong foundations in engineering principles.",
      "Developed programming skills in C++ and Data Structures & Algorithms.",
      "Involved in multiple academic projects related to software development and data analysis.",
    ],
  },
  {
    degree: "Bachelor of Technology (B.Tech) in Civil Engineering",
    institution: "Ramkrishna Mahato Government Engineering College (RKMGEC)",
    duration: "2018 – 2022",
    location: "Purulia, West Bengal, India",
    details: [
      "Graduated with strong foundations in engineering principles.",
      "Developed programming skills in C++ and Data Structures & Algorithms.",
      "Involved in multiple academic projects related to software development and data analysis.",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaGraduationCap className="inline-block mr-2 text-green-400" />
          Education
        </motion.h2>

        <div className="space-y-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0f172a] p-6 rounded-lg shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold text-green-400">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-medium text-gray-300">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-400">{edu.location}</p>
                </div>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {edu.duration}
                </p>
              </div>

              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
