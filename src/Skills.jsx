import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLinux } from "react-icons/fa";
import { SiFigma, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    { name: "Linux", icon: <FaLinux className="text-gray-400" /> },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-6xl">{skill.icon}</div>
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
