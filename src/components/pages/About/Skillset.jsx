import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skillset = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Node", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "GitHub", icon: FaGithubSquare, color: "#181717" },
  ];

  return (
    <div className="container my-5 py-5">
      <h2 className="text-center fw-bold my-4 pb-4">My Skills</h2>
      <div className="row g-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div className="col-6 col-sm-4 col-md-3" key={index}>
              <div
                className="card skill-card text-center shadow-sm "
                style={{ padding: "15px 0" }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <Icon
                    size={40}
                    style={{ color: skill.color }}
                    className="mb-2"
                  />
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skillset;
