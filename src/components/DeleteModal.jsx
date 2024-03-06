import PropTypes from "prop-types";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteModal = ({ title, content, onClose }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    axios
      .delete(`https://bboard-backend.onrender.com/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
        alert("Error deleting note. Please try again.");
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl min-w-96 min-h-60">
        <h2 className="text-3xl mb-4">
          Are you sure you want to delete this Note?
        </h2>
        <p className="text-lg min-h-32 mt-10 text-slate-500 font-thin max-h-52 overflow-y-auto overflow-x-hidden">
          {content}
        </p>
        <button
          className="mt-4 py-2 px-4 bg-gray-100 rounded-md"
          onClick={handleDeleteBook}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

DeleteModal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteModal;
