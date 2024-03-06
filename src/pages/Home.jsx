import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import NavBar from "../components/NavBar";
const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //   setLoading(true);
    axios
      .get("https://bboard-backend.onrender.com/")
      .then((response) => {
        setNotes(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div className=" m-1 min-h-screen" style={styles.container}>
        <div className="flex flex-row justify-between m-6">
          <h1 className="text-4xl">All Notes</h1>
          <Link to="/create">
            <h1 className="rounded-3xl border border-gray-300 p-2 px-4 cursor-pointer bg-white shadow-md">
              Add new Note
              <AddRoundedIcon className="mx-2 " />
            </h1>
          </Link>
        </div>
        <div className="flex flex-row justify-start flex-wrap gap-4 m-5 mx-4 my-20">
          {/* {notes.map((note, index) => (
          <>
            <NoteCard
              key={index}
              note={note}
              title={note.title}
              content={note.content}
            />
          </>
        ))} */}
          {notes.length === 0 ? (
            <div className="flex flex-col justify-center align-center m-auto gap-5 mt-20">
              <h1 className="font-medium text-lg text-gray-700">
                No Notes to show yet.
              </h1>
              <h2 className="font-normal text-lg text-gray-600">
                Add a new Note by clicking + button
              </h2>
            </div>
          ) : (
            notes.map((note, index) => (
              <NoteCard
                key={index}
                note={note}
                title={note.title}
                content={note.content}
              />
            ))
          )}
        </div>
      </div>
    </>
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

export default Home;
