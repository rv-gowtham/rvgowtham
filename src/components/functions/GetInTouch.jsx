import React, { useState } from "react";

const GetInTouch = () => {
  const [dataMail, setDataMail] = useState("");
  const [inputData, setInputData] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setDataMail(inputData);
    window.alert("Submitted");
    setInputData("");
    console.log({ dataMail });
  };

  return (
    <>
      <div>
        <div>
          <h1></h1>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">EMAIL : </label>
              <input
                className="border rounded-2"
                style={{ maxWidth: "300px" }}
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
