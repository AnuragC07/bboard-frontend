import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
const DeleteNote = ({ title, content }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({});
  const handleDeleteNote = () => {
    axios
      .delete(`http://localhost:8000/${id}`)
      .then((response) => {
        setNote(response.data);
        navigate("/");
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  return (
    <div className="p-4" style={styles.container}>
      <BackButton />
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl min-w-96 min-h-60 m-5">
          <h2 className="text-3xl mb-4">
            Are you sure you want to delete this Note?
          </h2>
          <button
            className="mt-10 px-4 bg-zinc-800 rounded-xl m-1 py-3 text-white"
            onClick={handleDeleteNote}
          >
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};
DeleteNote.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
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
export default DeleteNote;
