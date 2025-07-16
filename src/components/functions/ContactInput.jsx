import React, { useState } from "react";

const ContactInput = () => {
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateSubject, setUpdateSubject] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updateName,
          email: updateEmail,
          subject: updateSubject,
          message: updateMessage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Submitted Successfully");
        setUpdateName("");
        setUpdateEmail("");
        setUpdateSubject("");
        setUpdateMessage("");
      } else {
        alert(data.error || "Submission Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server Error");
    }
  };

  return (
    <div className="container py-4">
      <form onSubmit={onSubmit}>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                NAME :
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={updateName}
                onChange={(e) => setUpdateName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                EMAIL :
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={updateEmail}
                onChange={(e) => setUpdateEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                SUBJECT :
              </label>
              <input
                className="form-control"
                type="text"
                id="subject"
                value={updateSubject}
                onChange={(e) => setUpdateSubject(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                MESSAGE :
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                style={{ resize: "none" }}
                value={updateMessage}
                onChange={(e) => setUpdateMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-end pt-4">
              <button
                className="btn btn-outline-primary"
                style={{ width: "150px", height: "40px" }}
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactInput;
