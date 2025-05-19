"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Uttar Pradesh Tourism Web Service",
    description:
      "A full-stack tourism web service showcasing destinations across UP using Leaflet.js, styled with Tailwind CSS, and supporting live statistics, responsive UI, and region-based search.",
    tech: ["Leaflet.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/MrigankaSB/UP_Tourism",
  },
  {
    title: "Indian States WebGIS",
    description:
      "An interactive WebGIS dashboard built using Leaflet.js that visualizes Indian states on a responsive map. This project was developed as part of the Technical Assignment for the WebGIS Developer Internship at TerrAqua UAV Solutions Pvt Ltd.",
    tech: [
      "JavaScript",
      "Tailwind CSS",
      "Leaflet.js",
      "OpenStreetMap",
      "India States GeoJSON",
    ],
    github: "https://github.com/MrigankaSB/indian-states-webgis",
  },
  {
    title: "UAV Altitude Estimator (C++)",
    description:
      "A C++ simulation of altitude estimation using noisy barometer and sonar readings with fault detection logic — built as part of an Embedded Systems selection round.",
    tech: ["C++", "Embedded Systems", "Simulation"],
    github: "https://github.com/MrigankaSB/Agravity-Systems-Assignment",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#020617] text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-blue-700 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-400 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-900/40 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="hover:text-blue-500"
                  >
                    <FaGithub size={20} />
                  </Link>
                )}
                {/* You can add live links or demos if available */}
                {/* <Link href="https://demo.com" target="_blank" className="hover:text-blue-500">
                  <FaExternalLinkAlt size={18} />
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
