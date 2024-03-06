import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import DeleteNote from "./pages/DeleteNote";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
        <Route path="/delete/:id" element={<DeleteNote />} />
      </Routes>
    </>
  );
};

export default App;
