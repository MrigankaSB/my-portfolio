import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-16 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left */}
        <p className="text-sm">
          &copy; {currentYear} Mriganka Shekhar Barman. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex space-x-5 text-xl">
          <Link
            href="https://github.com/MrigankaSB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/MrigankaSB/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="mailto:mrigankasb23@iitk.ac.in"
            className="hover:text-red-600 dark:hover:text-red-400"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>
    </footer>
  );
}
