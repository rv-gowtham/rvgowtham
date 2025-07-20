import React from "react";
import profile from "../../../assets/ucw.png";

const Resume = ({ pickColor }) => {
  const picks = pickColor;

  const skills = [
    { category: "Language", items: ["Java", "JavaScript"] },
    { category: "Front-End Tools", items: ["HTML", "CSS", "React.js"] },
    { category: "Back-End Tools", items: ["Node.js", "Express.js"] },
    { category: "Database", items: ["MySQL", "MongoDB"] },
    { category: "API Tools", items: ["REST API", "Postman"] },
    { category: "Version Control", items: ["Git", "GitHub"] },
    {
      category: "Tools",
      items: ["Windows", "Linux", "VS Code", "MS Office", "Figma"],
    },
    {
      category: "Soft Skills",
      items: [
        "Communication",
        "Problem-Solving",
        "Teamwork",
        "Time Management",
        "Work Ethic",
      ],
    },
    {
      category: "Others",
      items: ["Responsive Design", "Debugging", "UI/UX Understanding"],
    },
  ];

  return (
    <>
      <div className="resume col-12 d-flex justify-content-center ">
        <div className=" my-5 col-11 " style={{ color: picks }}>
          <div
            className="col-12 rounded-4 p-2 p-md-5"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
            }}
          >
            <div className="col-12 d-flex flex-column flex-md-row ">
              <div className="col-12 d-flex justify-content-center col-md-3 mt-2">
                <img
                  src={profile}
                  className="rounded-4 w-100 mt-5"
                  style={{ maxWidth: "300px", maxHeight: "250px" }}
                  alt=""
                />
              </div>
              <div className="col-12 col-md-9 ps-1  ps-md-3">
                <div className="col-12 my-5">
                  <div
                    className="col-12 display-1 fw-bold"
                    style={{ letterSpacing: ".2cm" }}
                  >
                    GOWTHAM R
                  </div>
                </div>
                <div>
                  <h3 className="col-12 display-6 text-center text-md-start fw-normal text-break">
                    Aspiring Full-Stack Developer
                  </h3>
                </div>
                <div>
                  <h5 className="text-center text-md-start text-break">
                    7373512561 | rvgowtham6@gmail.com | LinkedIn | GitHub
                  </h5>
                </div>
              </div>
            </div>
            <hr style={{ border: `1px solid ${picks}` }} />

            <div>
              <h2>Profile Summary </h2>
            </div>

            <div>
              <p className="">
                <span className="ms-5"></span>
                Aspiring Full-Stack Developer with a solid foundation in
                computer science and a strong work ethic. Skilled in solving
                real world problems through efficient coding, teamwork, and
                adaptability. Known for clear communication, creative thinking,
                and a commitment to continuous learning. Highly organized and
                driven by challenges, seeking an opportunity to apply technical
                expertise and contribute to impactful software solutions.
              </p>
            </div>
            <br />

            <div>
              <h2>Skills</h2>
            </div>

            <div className="ps-2 ps-md-5">
              <ul>
                {skills.map(({ category, items }) => (
                  <li key={category}>
                    <strong>{category}:</strong> {items.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
            <br />

            <div>
              <div>
                <h2>Project</h2>
              </div>
              <div className="fw-bold">
                Real-time Weather Application ( CLEAR ✨ )
              </div>
              <div>
                <strong>Tech Stack : </strong> React.js, Bootstrap,
                OpenWeatherMap API
              </div>
              <div>
                <ul>
                  <li>
                    Built a real-time weather application using React.js, styled
                    with Bootstrap for responsive design.
                  </li>
                  <li>
                    Integrated OpenWeatherMap API to fetch and display live
                    weather data based on user input (city/region).
                  </li>
                  <li>
                    Implemented components for current temperature, humidity,
                    conditions, and forecast visuals.
                  </li>
                  <li>
                    Focused on usability and clean UI/UX, ensuring accessibility
                    across screen sizes.
                  </li>
                  <div>
                    <a href="https://clear-rv.vercel.app">Link</a>
                  </div>
                </ul>
              </div>
              <br />
              <div className="fw-bold">Personal Portfolio Website</div>
              <div>
                <strong>Tech Stack : </strong> React.js, Bootstrap
              </div>
              <div>
                <ul>
                  <li>
                    Developed a responsive personal portfolio website using
                    React.js and Bootstrap, showcasing skills, projects, and
                    contact information.
                  </li>
                  <li>
                    Implemented reusable React components for scalability and
                    modularity.
                  </li>
                  <li>
                    Designed a clean, modern UI using Bootstrap for enhanced
                    user experience across devices.
                  </li>
                  <li>
                    Integrated a functional contact form for user communication.
                  </li>
                  <div>
                    <a href="https://rvgowtham.vercel.app">Link</a>
                  </div>
                </ul>
              </div>
            </div>
            <br />

            {/* education */}
            <div>
              <div>
                <h2>Education</h2>
              </div>
              <div>
                Batchelor of Engineering ( B.E.) – Computers Science and
                Engineering
              </div>
              <div className="d-flex justify-content-between pb-3">
                <div>
                  Dhanalakshmi College of Engineering, Tambaram, Chennai ( CGPA
                  : 8.01 )
                </div>
                <div>2021 – 2025</div>
              </div>

              <div>Higher Secondary ( HSC ) – Bio - Maths</div>
              <div className="d-flex justify-content-between">
                <div>
                  TNPMMN Hr Sec School, Thalavaipuram, Rajapalayam (Score : 486
                  / 600 )
                </div>
                <div>2020 – 2021</div>
              </div>
            </div>
            <br />

            {/* internship */}
            <div>
              <div>
                <h2>Internship</h2>
              </div>
              <div className="d-flex justify-content-between">
                <div>PanTech Pvt. Ltd. – Artificial Intelligence </div>
                <div>Jul – 2023 | Chennai </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>VultureLine , Ui / Ux </div>
                <div>Aug – 2024 | Chennai </div>
              </div>
            </div>
            <br />

            {/* Certifications */}
            <div className="pb-5">
              <div>
                <h2>Certification</h2>
              </div>
              <div className="d-flex justify-content-between">
                <div>Google Career Certifications, Data Analytics </div>
                <div>Nov – 2023 | Chennai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
