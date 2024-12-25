import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Node.js", icon: <FaNode className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-800" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
];

const LogoSlider = ({ count = 2 }) => {
  const repeatedSkills = Array(count).fill(skills).flat();

  return (
    <div className="w-full overflow-hidden mt-2">
      <div className="flex animate-scroll gap-10">
        {repeatedSkills.map((skill, index) => (
          <div key={index} className="text-5xl flex-shrink-0">
            {skill.icon}
          </div>
        ))}
        {/* Duplicate the elements to create the infinite scrolling effect */}
        {repeatedSkills.map((skill, index) => (
          <div key={`duplicate-${index}`} className="text-5xl flex-shrink-0">
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
