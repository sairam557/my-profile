import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white font-mono">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-gray-800 p-4 shadow-lg z-10">
        <ul className="flex justify-center space-x-8 text-lg uppercase tracking-wide">
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
          <li><a href="#education" className="hover:text-cyan-400 transition">Education</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </nav>

      <div className="pt-24 flex flex-col items-center px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          id="about"
          className="text-center py-12"
        >
          <h1 className="text-6xl font-extrabold text-cyan-400 drop-shadow-lg tracking-widest">chandan Ramesh kr</h1>
          <p className="text-xl text-gray-400 mt-4">DevOps Engineer | Cloud & Automation Enthusiast</p>
        </motion.header>

        {/* Sections */}
        {[
          { id: "skills", title: "Skills", content: "AWS, Linux, Docker, Terraform, Kubernetes, CI/CD (Jenkins), Git, React.js" },
          { id: "experience", title: "Experience", content: "Developed scalable applications using React.js, automated infrastructure using Terraform, and implemented CI/CD pipelines with Jenkins." },
          { id: "education", title: "Education", content: "B.E. in Mechanical Engineering - Jawaharlal Nehru National College of Engineering (2018-2022)" }
        ].map((section, index) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 + index * 0.2 }}
            id={section.id}
            className="w-full max-w-4xl text-center mt-8 bg-gray-800 p-8 rounded-xl shadow-lg border border-cyan-500"
          >
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6">{section.title}</h2>
            <p className="text-gray-300 text-lg">{section.content}</p>
          </motion.section>
        ))}

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
          id="contact"
          className="w-full max-w-4xl text-center mt-8 bg-gray-800 p-8 rounded-xl shadow-lg border border-cyan-500"
        >
          <h2 className="text-3xl font-semibold text-cyan-400 mb-6">banglore</h2>
          <div className="flex justify-center space-x-8">
            {[
              { href: "mailto:chandanramesh73@gmail.com", icon: <FaEnvelope /> },
              { href: "https://github.com/yourgithub", icon: <FaGithub /> },
              { href: "https://linkedin.com/in/yourlinkedin", icon: <FaLinkedin /> }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 text-4xl transition-transform transform hover:scale-125"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default App;
