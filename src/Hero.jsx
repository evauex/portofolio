import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-900 text-white px-6 pt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side - Text Content */}
        <section>
            
        </section>
        <div id="about" className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-400">Enrique Hadinoto</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            I'm a passionate developer building modern websites and applications. Let's create something amazing together!
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-500 rounded-lg text-white text-lg font-semibold hover:bg-blue-600 transition"
          >
            See My Work
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/hero_section.png" // Replace with your actual image path
            alt="Your Name"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
