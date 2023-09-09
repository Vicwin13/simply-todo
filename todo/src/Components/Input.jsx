import { useState } from "react";

export default function Input({ onSubmit }) {
  const [input, setInput] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  let bodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { input, body };
    onSubmit(result);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label> Todo Title: </label>
        <input
          required
          // className="input"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea required value={body} onChange={bodyChange}></textarea>

        <button className="submitButton" type="submit">Submit</button>
      </form>
    </div>
  );
}
