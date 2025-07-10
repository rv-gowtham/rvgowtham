import React, { useState } from "react";

const ContactInput = () => {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");

  const [email, setEmail] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");

  const [subject, setSubject] = useState("");
  const [updateSubject, setUpdateSubject] = useState("");

  const [message, setMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(updateName);
    setEmail(updateEmail);
    setSubject(updateSubject);
    setMessage(updateMessage);
    setUpdateName("");
    setUpdateEmail("");
    setUpdateSubject("");
    setUpdateMessage("");
    console.log({ name, email, subject, message });
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
                className="btn btn-outline-primary "
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
