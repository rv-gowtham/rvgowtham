import React from "react";
import clear from "../../../assets/clear.png";

const Project = () => {
  const projects = [
    {
      title: "Clear ✨, Weather app",
      link: "https://clear-rv.vercel.app/",
      img: clear,
    },
    {
      title: "Stay tuned for more projects...",
      isPlaceholder: true,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">My Projects</h2>
      <div className="row g-4 d-flex justify-content-center">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className={`card h-100 text-center ${
                project.isPlaceholder ? "border-dashed" : ""
              }`}
              style={project.isPlaceholder ? { border: "2px dashed #ccc" } : {}}
            >
              {project.img && (
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}

              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{project.title}</h5>
                {!project.isPlaceholder && (
                  <a
                    href={project.link}
                    className="btn btn-outline-dark btn-sm mt-3 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
