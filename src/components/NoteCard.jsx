import React, { useState } from "react";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DeleteNote from "../pages/DeleteNote";

const NoteCard = ({ title, note, content }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="border border-slate-100 my-3 mx-1 p-5 min-h-32 w-64 rounded-2xl shadow-2xl cursor-pointer bg-white">
        <div
          className="text-3xl text-slate-600 font-normal"
          onClick={openModal}
        >
          {title}
        </div>
        <div
          className="text-lg mt-10 text-slate-500 font-thin min-h-52 max-h-52 overflow-y-auto overflow-x-hidden scroll-smooth"
          onClick={openModal}
        >
          {content}
        </div>
        <div className="flex flex-row justify-evenly mt-3">
          <Link to={`/edit/${note._id}`}>
            <EditNoteRoundedIcon className="cursor-pointer text-slate-600" />
          </Link>

          {/* <LaunchRoundedIcon className="cursor-pointer text-slate-600" /> */}
          <Link to={`/delete/${note._id}`}>
            <DeleteOutlineRoundedIcon className="cursor-pointer text-slate-600" />
          </Link>
        </div>
      </div>
      {showModal && (
        <Modal title={title} content={content} onClose={closeModal} />
      )}
    </>
  );
};

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default NoteCard;
