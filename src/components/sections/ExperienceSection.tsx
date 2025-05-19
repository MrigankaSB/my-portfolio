"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "",
    role: "WebGIS Developer Intern @TerrAqua UAV Solutions Pvt. Ltd.",
    duration: "May 2025 – Present",
    location:
      "Diamond Jubilee, Academic Complex, Block 401, Cabin No. 20/21, IIT Kanpur, Kanpur, 208016, India",
    description: [
      "Built and deployed interactive WebGIS apps using Leaflet, OpenLayers, and ArcGIS JS API to visualize and analyze high-resolution drone imagery, LiDAR point clouds, and shapefiles.",
      "Built and integrated RESTful APIs using Python (Django) to deliver real-time geospatial functionalities and custom geoprocessing services, including spatial queries and overlays.",
      "Utilized PostGIS for efficient spatial database management and optimized performance of large-scale geospatial datasets across web-based mapping interfaces.",
      "Created interactive, mobile-friendly UI components using React.js, Next.js, and Tailwind CSS, improving usability and data interpretation for clients and internal stakeholders.",
      "Contributed to a web tool that improved infrastructure inspection workflows, collaborating with drone operators and GIS analysts to deliver tailored, high-impact geospatial solutions.",
    ],
    tech: [
      "Leaflet.js, JavaScript, Node.js, MongoDB, PostgreSQL, AWS, Django, Flask, HTML 5, CSS, OpenStreetMap, Google Earth Engine, Tailwind CSS, GeoJSON, Python",
    ],
  },
  {
    company: "",
    role: "Programmer Analyst Trainee (Intern) @Cognizant Technology Solutions",
    duration: "Feb 2022 – July 2022",
    location: "Remote (India)",
    description: [
      "Worked in the domain of Quality Engineering and Assurance.",
      "Trained and implemented automation testing using Java and Selenium.",
      "Contributed to testing pipelines and code quality improvements.",
    ],
    tech: ["Java, Selenium, TestNG, Automation Testing, HTML, CSS, JavaScript"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaBriefcase className="inline-block mr-2 text-blue-500" /> Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-medium text-gray-300">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400">{exp.location}</p>
                </div>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
