import React, { useState } from "react";

function AddVideoForm({ addVideo }) {
  const [formData, setFormData] = useState({ title: "", url: "" });

  function handleChange(e) {
    setFormData((currentData) => {
      return {
        ...currentData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addVideo(formData);
    setFormData({ title: "", url: "" });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video title"
          name="title"
          onChange={handleChange}
          value={formData.title}
        ></input>
        <input
          type="text"
          placeholder="video url"
          name="url"
          onChange={handleChange}
          value={formData.url}
        ></input>
        <button>Add Video</button>
      </form>
    </>
  );
}

export default AddVideoForm;
