import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const handleSaveNote = () => {
    const data = {
      title,
      content,
    };
    axios
      .post("http://localhost:8000/", data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("Error occurred");
        console.log(error);
      });
  };

  return (
    <div className="p-4" style={styles.container}>
      <div className="flex flex-row">
        <BackButton />
        <h1 className="text-3xl mx-5">Create Note</h1>
      </div>
      <div className="bg-white flex flex-col border border-slate-100  w-4/5 p-4 mx-auto my-5 rounded-2xl shadow-xl cursor-pointer">
        <div className="my-4">
          <label className="text-3xl text-slate-600 font-normal">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-100 my-5 px-4 py-3 w-full rounded-lg"
            placeholder="Give your note a heading"
          />
        </div>
        <div className="my-1">
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-gray-100 my-5 px-5 py-5 w-full rounded-lg min-h-52 max-h-52 overflow-y-auto overflow-x-hidden text-slate-500 font-regular"
            placeholder="Enter your Note"
          />
        </div>
        <button
          className="p-2 bg-zinc-800 rounded-xl m-8 py-3 text-white"
          onClick={handleSaveNote}
        >
          Create Note
        </button>
      </div>
    </div>
  );
};
const styles = {
  container: {
    backgroundColor: "#ffffff",
    opacity: 0.7,
    backgroundImage:
      "radial-gradient(#919191 1.3px, transparent 1.3px), radial-gradient(#919191 1.3px, #ffffff 1.3px)",
    backgroundSize: "52px 52px",
    backgroundPosition: "0 0,26px 26px",
  },
};
export default CreateNote;
