import React, { useState } from "react";
import axios from "axios";

const ContactInput = () => {
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateSubject, setUpdateSubject] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/contact`, {
        name: updateName,
        email: updateEmail,
        subject: updateSubject,
        message: updateMessage,
      });

      alert(response.data.message || "Submitted Successfully");

      // Reset form
      setUpdateName("");
      setUpdateEmail("");
      setUpdateSubject("");
      setUpdateMessage("");
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("Server Error");
      }
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
