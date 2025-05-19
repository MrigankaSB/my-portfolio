"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-20"
    >
      <div className="flex-1 mb-10 md:mb-0">
        <motion.h1
          className="text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Mriganka Shekhar Barman
        </motion.h1>
        <p className="text-gray-300 mb-8 max-w-lg text-lg">
          IITian | Full Stack Developer | DSA Enthusiast | MERN Stack | Embedded
          Systems | WebGIS | AI/ML Enthusiast | Automation Testing
        </p>
      </div>

      <div className="flex-shrink-0 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-blue-600 shadow-2xl">
        <Image
          src="/mriganka.jpg"
          alt="Mriganka Shekhar Barman"
          width={360} // 96 * 4 = 384px width
          height={360} // 96 * 4 = 384px height
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
