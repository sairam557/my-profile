import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white font-mono">
      {/* Navigation Bar */}
      <nav className="w-full bg-gray-800 p-4 fixed top-0 flex justify-center shadow-lg z-10">
        <ul className="flex space-x-8 text-lg">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
      
      <div className="pt-20 flex flex-col items-center p-8">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          id="about"
          className="text-center py-12"
        >
          <h1 className="text-6xl font-extrabold text-blue-400 drop-shadow-lg tracking-wide">Chandan KR</h1>
          <p className="text-xl text-gray-400 mt-4">DevOps Engineer | React Developer</p>
        </motion.header>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2 }}
          id="skills"
          className="w-full max-w-4xl text-center mt-8 bg-gray-800 p-8 rounded-lg shadow-xl border border-blue-500"
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Skills</h2>
          <p className="text-gray-300 text-lg">AWS, Linux, Docker, Terraform, Kubernetes, CI/CD (Jenkins), Git, React.js</p>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.4 }}
          id="experience"
          className="w-full max-w-4xl text-center mt-8 bg-gray-800 p-8 rounded-lg shadow-xl border border-blue-500"
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Experience</h2>
          <p className="text-gray-300 text-lg">
            Developed scalable applications using React.js, automated infrastructure using Terraform, and implemented CI/CD pipelines with Jenkins.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.6 }}
          id="education"
          className="w-full max-w-4xl text-center mt-8 bg-gray-800 p-8 rounded-lg shadow-xl border border-blue-500"
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Education</h2>
          <p className="text-gray-300 text-lg">B.E. in Mechanical Engineering - Jawaharlal Nehru National College of Engineering (2018-2022)</p>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.8 }}
          id="contact"
          className="w-full max-w-4xl text-center mt-8 bg-gray-800 p-8 rounded-lg shadow-xl border border-blue-500"
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Contact</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:chandanramesh73@gmail.com" className="text-gray-300 hover:text-blue-400 text-4xl transition-transform transform hover:scale-125">
              <FaEnvelope />
            </a>
            <a href="https://github.com/yourgithub" className="text-gray-300 hover:text-blue-400 text-4xl transition-transform transform hover:scale-125">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" className="text-gray-300 hover:text-blue-400 text-4xl transition-transform transform hover:scale-125">
              <FaLinkedin />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default App;
