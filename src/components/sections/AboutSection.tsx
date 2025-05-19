"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          I’m <strong>Mriganka Shekhar Barman</strong>, a Civil Engineering
          graduate from India, currently pursuing a transition to Computer
          Science and Engineering research. With a background in{" "}
          <strong>
            Full Stack Development, Data Structures and Algorithms, WebGIS,
            Embedded Systems, and AI/ML
          </strong>
          , I’m passionate about building performant, real-world web
          applications and drone-based applications.
        </p>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-6">
          I have experience with QA Automation (Java + Selenium), WebGIS
          projects using Leaflet.js and Tailwind CSS, and internships involving
          embedded systems for UAVs. My long-term goal is to contribute to
          industry R&D through a PhD in CS, focusing on Edge AI and intelligent
          systems.
        </p>

        <p className="text-gray-400 text-md mt-10 italic">
          Technologies I work with: Next.js, React, Tailwind CSS, Node.js,
          Express, MongoDB, PostgreSQL, TypeScript, Java, Leaflet.js, C++, ROS,
          Pixhawk, MAVLink, PX4, Arduino, Python, AWS
        </p>
      </motion.div>
    </section>
  );
}
